import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export type CalibreFinish = 'german-silver' | 'frosted-brass' | 'anodized-slate';

export interface ScrollState {
  progress: number;
  activeChapter: number;
  reducedMotion: boolean;
  manualExplode: boolean;
  highBeat: boolean;
  finish: CalibreFinish;
}

function createBrushedMetalTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#e6e3dc';
  ctx.fillRect(0, 0, 512, 512);

  // Subtle Côtes de Genève linear striping
  for (let x = 0; x < 512; x += 32) {
    const grad = ctx.createLinearGradient(x, 0, x + 32, 0);
    grad.addColorStop(0, 'rgba(255,255,255,0.28)');
    grad.addColorStop(0.5, 'rgba(0,0,0,0.06)');
    grad.addColorStop(1, 'rgba(255,255,255,0.28)');
    ctx.fillStyle = grad;
    ctx.fillRect(x, 0, 32, 512);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function WatchMovementAssembly({ scrollStateRef }: { scrollStateRef: React.MutableRefObject<ScrollState> }) {
  const rootGroup = useRef<THREE.Group>(null);
  const upperDialGroup = useRef<THREE.Group>(null);
  const bridgeGroup = useRef<THREE.Group>(null);
  const escapementCarriage = useRef<THREE.Group>(null);
  const balanceWheel = useRef<THREE.Group>(null);
  const mainspringPlate = useRef<THREE.Group>(null);
  const sweepHand = useRef<THREE.Group>(null);

  const brushedTex = useMemo(() => createBrushedMetalTexture(), []);

  const materials = useMemo(() => {
    const germanSilver = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#dfdcd5'),
      metalness: 0.78,
      roughness: 0.26,
      bumpMap: brushedTex,
      bumpScale: 0.004,
    });

    const rawBrass = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#c29648'),
      metalness: 0.84,
      roughness: 0.22,
    });

    const bluedSteel = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1d3557'),
      metalness: 0.88,
      roughness: 0.18,
    });

    const rubyJewel = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#b5173e'),
      metalness: 0.05,
      roughness: 0.08,
      transmission: 0.75,
      thickness: 0.4,
    });

    const vermilionLacquer = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#b8864b'),
      metalness: 0.65,
      roughness: 0.24,
    });

    const matteDialRing = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f7f5f0'),
      metalness: 0.08,
      roughness: 0.65,
    });

    const carbonInk = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#181816'),
      metalness: 0.2,
      roughness: 0.4,
    });

    const limestonePlinth = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#e2ddd2'),
      metalness: 0.02,
      roughness: 0.88,
    });

    return {
      germanSilver,
      rawBrass,
      bluedSteel,
      rubyJewel,
      vermilionLacquer,
      matteDialRing,
      carbonInk,
      limestonePlinth,
    };
  }, [brushedTex]);

  useFrame((state, delta) => {
    const { progress, reducedMotion, manualExplode, highBeat, finish } = scrollStateRef.current;
    const t = state.clock.getElapsedTime();

    // Update case/bridge finish color dynamically
    const targetFinishColor =
      finish === 'frosted-brass'
        ? new THREE.Color('#d1b47a')
        : finish === 'anodized-slate'
          ? new THREE.Color('#5a5d64')
          : new THREE.Color('#dfdcd5');
    materials.germanSilver.color.lerp(targetFinishColor, 0.1);

    // Exploded assembly factor driven either by scroll or by the manual bench toggle
    const scrollExplode = Math.sin(Math.min(1, Math.max(0, progress)) * Math.PI);
    const explodeFactor = manualExplode ? 1.0 : scrollExplode;

    if (rootGroup.current) {
      const targetRotY = -0.35 + progress * Math.PI * 1.15;
      const targetRotX = 0.48 - Math.sin(progress * Math.PI) * 0.22;
      rootGroup.current.rotation.y = THREE.MathUtils.lerp(rootGroup.current.rotation.y, targetRotY, 0.08);
      rootGroup.current.rotation.x = THREE.MathUtils.lerp(rootGroup.current.rotation.x, targetRotX, 0.08);
    }

    // Axial separation along Y for clean technical exploded view
    if (upperDialGroup.current) {
      upperDialGroup.current.position.y = THREE.MathUtils.lerp(
        upperDialGroup.current.position.y,
        0.38 + explodeFactor * 1.15,
        0.09
      );
    }

    if (bridgeGroup.current) {
      bridgeGroup.current.position.y = THREE.MathUtils.lerp(
        bridgeGroup.current.position.y,
        0.12 + explodeFactor * 0.42,
        0.09
      );
    }

    if (escapementCarriage.current) {
      escapementCarriage.current.position.y = THREE.MathUtils.lerp(
        escapementCarriage.current.position.y,
        0.02 - explodeFactor * 0.18,
        0.09
      );
      if (!reducedMotion) {
        escapementCarriage.current.rotation.y += delta * (highBeat ? 0.85 : 0.45);
      }
    }

    if (balanceWheel.current && !reducedMotion) {
      const freq = highBeat ? 18 : 11;
      balanceWheel.current.rotation.y = Math.sin(t * freq) * 0.65;
    }

    if (mainspringPlate.current) {
      mainspringPlate.current.position.y = THREE.MathUtils.lerp(
        mainspringPlate.current.position.y,
        -0.28 - explodeFactor * 0.85,
        0.09
      );
    }

    if (sweepHand.current && !reducedMotion) {
      sweepHand.current.rotation.y = -t * (highBeat ? 0.55 : 0.3);
    }

    // Subtle camera framing shift keeping full bezel and crown inside the 52% column
    const camX = THREE.MathUtils.lerp(0.0, -0.18, progress);
    const camY = THREE.MathUtils.lerp(3.15, 2.65, Math.sin(progress * Math.PI));
    const camZ = THREE.MathUtils.lerp(5.65, 5.15, Math.sin(progress * Math.PI * 0.8));
    state.camera.position.lerp(new THREE.Vector3(camX, camY, camZ), 0.07);
    state.camera.lookAt(0, 0.0, 0);
  });

  // 12 hour indices around the chapter ring
  const indices = useMemo(() => Array.from({ length: 12 }, (_, i) => (i * Math.PI * 2) / 12), []);
  // 8 gear teeth spokes
  const spokes = useMemo(() => Array.from({ length: 6 }, (_, i) => (i * Math.PI) / 6), []);

  return (
    <group position={[0, -0.05, 0]} scale={0.72}>
      <group ref={rootGroup} rotation={[0.48, -0.35, 0]}>
        {/* LAYER 1: UPPER BAUHAUS / SWISS REGULATOR CHAPTER RING & HANDS */}
        <group ref={upperDialGroup} position={[0, 0.38, 0]}>
          {/* Outer Satin Bezel */}
          <mesh material={materials.germanSilver} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.62, 0.09, 32, 96]} />
          </mesh>

          {/* Matte Archival Chapter Ring */}
          <mesh material={materials.matteDialRing} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
            <ringGeometry args={[1.18, 1.56, 64]} />
          </mesh>

          {/* 12 Applied Carbon Hour Batons */}
          {indices.map((angle, idx) => (
            <mesh
              key={idx}
              material={idx === 0 ? materials.vermilionLacquer : materials.carbonInk}
              position={[Math.sin(angle) * 1.37, 0.01, Math.cos(angle) * 1.37]}
              rotation={[0, angle, 0]}
            >
              <boxGeometry args={[idx % 3 === 0 ? 0.05 : 0.025, 0.02, idx % 3 === 0 ? 0.22 : 0.14]} />
            </mesh>
          ))}

          {/* International Vermilion Sweep Hand */}
          <group ref={sweepHand} position={[0, 0.06, 0]}>
            <mesh material={materials.vermilionLacquer} position={[0, 0, -0.52]}>
              <boxGeometry args={[0.032, 0.018, 1.32]} />
            </mesh>
            <mesh material={materials.vermilionLacquer} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.09, 0.09, 0.04, 24]} />
            </mesh>
          </group>
        </group>

        {/* LAYER 2: THREE-QUARTER GERMAN SILVER BRIDGE & RUBY CHATONS */}
        <group ref={bridgeGroup} position={[0, 0.12, 0]}>
          {/* Main Twin-Arched Calibre Bridge */}
          <mesh material={materials.germanSilver} position={[-0.45, 0, 0]}>
            <boxGeometry args={[1.55, 0.11, 2.1]} />
          </mesh>
          <mesh material={materials.germanSilver} position={[0.68, 0, -0.55]}>
            <boxGeometry args={[0.95, 0.11, 0.85]} />
          </mesh>

          {/* Pressed Gold Chatons + Synthetic Ruby Jewels + Heat-Blued Screws */}
          {[
            [-0.65, 0.07, -0.55],
            [-0.65, 0.07, 0.55],
            [-0.1, 0.07, 0],
            [0.65, 0.07, -0.55],
          ].map(([x, y, z], i) => (
            <group key={i} position={[x, y, z]}>
              <mesh material={materials.rawBrass}>
                <cylinderGeometry args={[0.13, 0.13, 0.03, 24]} />
              </mesh>
              <mesh material={materials.rubyJewel} position={[0, 0.02, 0]}>
                <cylinderGeometry args={[0.08, 0.08, 0.03, 24]} />
              </mesh>
              <mesh material={materials.bluedSteel} position={[0.22, 0, 0.14]}>
                <cylinderGeometry args={[0.045, 0.045, 0.035, 16]} />
              </mesh>
            </group>
          ))}
        </group>

        {/* LAYER 3: EXPOSED ESCAPEMENT CARRIAGE & FREE-SPRUNG BALANCE WHEEL */}
        <group ref={escapementCarriage} position={[0.52, 0.02, 0.38]}>
          {/* Outer Titanium Tourbillon Cage */}
          <mesh material={materials.germanSilver} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.58, 0.035, 20, 64]} />
          </mesh>
          {/* Upper Cage Bridge */}
          <mesh material={materials.bluedSteel} position={[0, 0.05, 0]}>
            <boxGeometry args={[1.22, 0.03, 0.08]} />
          </mesh>

          {/* Oscillating Brass Balance Wheel with Timing Weights */}
          <group ref={balanceWheel}>
            <mesh material={materials.rawBrass} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.44, 0.04, 16, 48]} />
            </mesh>
            {spokes.map((rot, idx) => (
              <mesh key={idx} material={materials.rawBrass} rotation={[0, rot, 0]}>
                <boxGeometry args={[0.86, 0.02, 0.035]} />
              </mesh>
            ))}
          </group>

          {/* Central Ruby Pivot */}
          <mesh material={materials.rubyJewel} position={[0, 0.07, 0]}>
            <cylinderGeometry args={[0.07, 0.07, 0.04, 24]} />
          </mesh>
        </group>

        {/* LAYER 4: MAINSPRING BARREL, CENTER WHEEL & MILLED CASEBACK */}
        <group ref={mainspringPlate} position={[0, -0.28, 0]}>
          {/* Base Mainplate */}
          <mesh material={materials.germanSilver}>
            <cylinderGeometry args={[1.64, 1.58, 0.16, 64]} />
          </mesh>

          {/* Exposed Brass Center Wheel & Ratchet Barrel */}
          <mesh material={materials.rawBrass} position={[-0.38, 0.14, -0.28]}>
            <cylinderGeometry args={[0.62, 0.62, 0.08, 48]} />
          </mesh>
          <mesh material={materials.rawBrass} position={[0.35, 0.12, -0.45]}>
            <cylinderGeometry args={[0.38, 0.38, 0.08, 36]} />
          </mesh>

          {/* Physical Knurled Winding Crown at 3 O'Clock with Vermilion Collar */}
          <group position={[1.78, 0.08, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh material={materials.vermilionLacquer} position={[0, 0.12, 0]}>
              <cylinderGeometry args={[0.14, 0.14, 0.1, 24]} />
            </mesh>
            <mesh material={materials.germanSilver}>
              <cylinderGeometry args={[0.24, 0.24, 0.22, 24]} />
            </mesh>
          </group>
        </group>
      </group>

      {/* HONED LIMESTONE ATELIER DISPLAY PLINTH */}
      <mesh material={materials.limestonePlinth} position={[0, -1.65, 0]}>
        <cylinderGeometry args={[2.15, 2.25, 0.35, 64]} />
      </mesh>
      <ContactShadows position={[0, -1.46, 0]} opacity={0.35} scale={6.5} blur={2.2} far={3.5} color="#1a1917" />
    </group>
  );
}

export const CalibreZeroScene: React.FC<{ scrollStateRef: React.MutableRefObject<ScrollState> }> = ({
  scrollStateRef,
}) => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      camera={{ position: [0.15, 2.55, 4.45], fov: 34 }}
    >
      <color attach="background" args={['#f3f0e8']} />

      {/* Sunlit Swiss Atelier Lighting */}
      <ambientLight intensity={1.35} color="#fffcf5" />
      <directionalLight position={[5, 8, 5]} intensity={2.4} color="#fff9ed" />
      <directionalLight position={[-5, 4, -3]} intensity={1.1} color="#e6e1d6" />
      <pointLight position={[0, 3, 2]} intensity={0.8} color="#ffffff" />

      <Environment preset="studio" environmentIntensity={0.75} />

      <WatchMovementAssembly scrollStateRef={scrollStateRef} />
    </Canvas>
  );
};

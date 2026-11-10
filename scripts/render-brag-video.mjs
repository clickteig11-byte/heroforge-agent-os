import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { chromium } from 'playwright';

const root = process.cwd();
const outDir = path.join(root, 'brag-output');
const framesDir = path.join(outDir, 'frames');
fs.mkdirSync(framesDir, { recursive: true });

function toDataUri(relPath) {
  const full = path.join(root, relPath);
  const b64 = fs.readFileSync(full).toString('base64');
  return `data:image/jpeg;base64,${b64}`;
}

const images = {
  s1: toDataUri('apps/gallery/public/references/website-a/atelier-hero-bg.jpg'),
  s2: toDataUri('apps/gallery/public/references/website-b/plate-reykjavik-basalt.jpg'),
  s2_naoshima: toDataUri('apps/gallery/public/references/website-b/plate-naoshima-acoustic.jpg'),
  s2_atacama: toDataUri('apps/gallery/public/references/website-b/plate-atacama-travertine.jpg'),
  s3: toDataUri('apps/gallery/public/references/sites/site-3-valkyr.jpg'),
  s4: toDataUri('apps/gallery/public/references/sites/site-4-sora.jpg'),
  s5: toDataUri('apps/gallery/public/references/sites/site-5-vespers.jpg'),
  s6: toDataUri('apps/gallery/public/references/sites/site-6-veloce.jpg'),
  s7: toDataUri('apps/gallery/public/references/sites/site-7-solaris.jpg'),
};

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const htmlPath = 'file://' + path.join(outDir, 'composition/index.html');

  const fps = 30;
  const duration = 60;
  const totalFrames = fps * duration; // 1,800 unique frames (30 unique frames every second!)
  const numWorkers = 4;
  const framesPerWorker = Math.ceil(totalFrames / numWorkers);

  await Promise.all(
    Array.from({ length: numWorkers }, async (_, wIdx) => {
      const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
      await page.goto(htmlPath, { waitUntil: 'domcontentloaded' });
      await page.evaluate((imgs) => window.__loadImages(imgs), images);

      const startF = wIdx * framesPerWorker;
      const endF = Math.min(totalFrames, (wIdx + 1) * framesPerWorker);
      const batchSize = 30;

      for (let s = startF; s < endF; s += batchSize) {
        const e = Math.min(endF, s + batchSize);
        const dataUrls = await page.evaluate(
          ({ sFrame, eFrame, fpsVal }) => {
            const c = document.getElementById('motion-stage');
            const arr = [];
            for (let f = sFrame; f < eFrame; f++) {
              window.__setRenderTime(f / fpsVal);
              arr.push(c.toDataURL('image/jpeg', 0.88));
            }
            return arr;
          },
          { sFrame: s, eFrame: e, fpsVal: fps }
        );

        for (let i = 0; i < dataUrls.length; i++) {
          const frameNum = s + i;
          const b64 = dataUrls[i].split(',')[1];
          const buf = Buffer.from(b64, 'base64');
          const framePath = path.join(framesDir, `frame-${String(frameNum).padStart(4, '0')}.jpg`);
          fs.writeFileSync(framePath, buf);
          if (frameNum === 0) {
            fs.writeFileSync(path.join(outDir, 'brag.jpg'), buf);
            fs.writeFileSync(path.join(root, 'apps/gallery/public/brag-poster.jpg'), buf);
          }
        }
      }
      await page.close();
    })
  );

  await browser.close();

  const mp4Out = path.join(outDir, 'brag.mp4');
  execSync(
    `ffmpeg -y -framerate 30 -i "${framesDir}/frame-%04d.jpg" -t 60 -r 30 -c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p -movflags +faststart "${mp4Out}"`,
    { stdio: 'inherit' }
  );

  fs.copyFileSync(mp4Out, path.join(root, 'apps/gallery/public/brag-x-post.mp4'));
  fs.rmSync(framesDir, { recursive: true, force: true });
  console.log('Rendered 1,800 unique 30fps Light-Mode Motion Graphics frames to brag.mp4!');
})();

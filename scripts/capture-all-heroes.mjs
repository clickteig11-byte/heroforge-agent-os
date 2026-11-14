import { chromium } from '/Users/caleblickteig/antigravity/Build-with-Caleb/heroforge-v1/node_modules/playwright/index.mjs';
import path from 'path';

const ARTIFACT_DIR = '/Users/caleblickteig/.gemini/antigravity/brain/dde2eb77-47e7-4b03-b4fa-8cb10892c947';

const TARGETS = [
  { id: '01', name: 'hero-01-aetherion.png', url: 'https://aetherion-geneve.vercel.app', title: 'Aetherion Genève' },
  { id: '02', name: 'hero-02-kurokawa.png', url: 'https://kurokawa-vane.vercel.app', title: 'Kurokawa & Vane' },
  { id: '03', name: 'hero-03-valkyr.png', url: 'https://valkyr-orbital.vercel.app', title: 'Valkyr Orbital' },
  { id: '04', name: 'hero-04-sora.png', url: 'https://sora-klang.vercel.app', title: 'Sora & Klang' },
  { id: '05', name: 'hero-05-vespers.png', url: 'https://atelier-vespers.vercel.app', title: 'Atelier Vespers' },
  { id: '06', name: 'hero-06-veloce.png', url: 'https://veloce-morphos.vercel.app', title: 'Veloce Morphos' },
  { id: '07', name: 'hero-07-solaris.png', url: 'https://solaris-lensworks.vercel.app', title: 'Solaris Lensworks' },
  { id: '08', name: 'hero-08-agent-os.png', url: 'https://heroforge-v1.vercel.app', title: 'HeroForge Agent OS Dashboard' }
];

async function main() {
  console.log(`Starting capture of ${TARGETS.length} hero pages...`);
  const browser = await chromium.launch({ channel: 'chrome', headless: true });

  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1
    });

    for (const target of TARGETS) {
      const page = await context.newPage();
      const destPath = path.join(ARTIFACT_DIR, target.name);
      console.log(`[${target.id}/08] Navigating to ${target.title} (${target.url})...`);

      try {
        await page.goto(target.url, { waitUntil: 'networkidle', timeout: 20000 });
        // Settle fonts and animations
        await page.waitForTimeout(1200);
        await page.screenshot({ path: destPath, clip: { x: 0, y: 0, width: 1440, height: 900 } });
        console.log(`  ✓ Saved: ${target.name}`);
      } catch (err) {
        console.error(`  ✗ Error on ${target.title}:`, err.message);
        // Fallback: try taking screenshot anyway if partial load
        try {
          await page.screenshot({ path: destPath, clip: { x: 0, y: 0, width: 1440, height: 900 } });
          console.log(`  ✓ Saved fallback: ${target.name}`);
        } catch (innerErr) {
          console.error(`  ✗ Fallback failed:`, innerErr.message);
        }
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    console.log('All hero screenshots captured and browser safely closed.');
  }
}

main().catch(err => {
  console.error('Fatal capture error:', err);
  process.exit(1);
});

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
  s3: toDataUri('apps/gallery/public/references/sites/site-3-valkyr.jpg'),
  s4: toDataUri('apps/gallery/public/references/sites/site-4-sora.jpg'),
  s5: toDataUri('apps/gallery/public/references/sites/site-5-vespers.jpg'),
  s6: toDataUri('apps/gallery/public/references/sites/site-6-veloce.jpg'),
  s7: toDataUri('apps/gallery/public/references/sites/site-7-solaris.jpg'),
};

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  const htmlPath = 'file://' + path.join(outDir, 'composition/index.html');
  await page.goto(htmlPath, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(800);

  await page.evaluate((imgs) => {
    window.__IMAGES = imgs;
    document.getElementById('s1-img-a').src = imgs.s1;
    document.getElementById('s1-img-b').src = imgs.s2;
    document.getElementById('s3-img').src = imgs.s1;
    document.getElementById('s4-img').src = imgs.s2;
    document.getElementById('s5-img').src = imgs.s3;
  }, images);
  await page.waitForTimeout(400);

  // Sample 120 keyframes across 60.0s (2 fps base stepped cleanly to 30fps via ffmpeg)
  const totalSteps = 120;
  for (let i = 0; i < totalSteps; i++) {
    const t = (i / totalSteps) * 60.0;
    await page.evaluate((sec) => window.__setRenderTime(sec), t);
    const frameFile = path.join(framesDir, `frame-${String(i).padStart(4, '0')}.jpg`);
    await page.screenshot({ path: frameFile, type: 'jpeg', quality: 92 });
    if (i === 0) {
      fs.copyFileSync(frameFile, path.join(outDir, 'brag.jpg'));
      fs.copyFileSync(frameFile, path.join(root, 'apps/gallery/public/brag-poster.jpg'));
    }
  }

  await browser.close();

  const mp4Out = path.join(outDir, 'brag.mp4');
  execSync(
    `ffmpeg -y -framerate 2 -i "${framesDir}/frame-%04d.jpg" -t 60 -r 30 -vf "scale=1920:1080:flags=lanczos" -c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p -movflags +faststart "${mp4Out}"`,
    { stdio: 'inherit' }
  );

  fs.copyFileSync(mp4Out, path.join(root, 'apps/gallery/public/brag-x-post.mp4'));
  console.log('Rendered 60.0s 1920x1080 Hyperframes /brag video to brag-output/brag.mp4 and apps/gallery/public/brag-x-post.mp4!');
})();

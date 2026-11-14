import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const SITES = [
  { name: 'vane-hydronics', url: 'https://vane-hydronics.vercel.app' },
  { name: 'nordic-turf', url: 'https://nordic-turf-iota.vercel.app' },
  { name: 'strata-roofing', url: 'https://strata-roofing-ten.vercel.app' },
  { name: 'volt-foundry', url: 'https://volt-foundry.vercel.app' },
  { name: 'gallery-dashboard', url: 'https://heroforge-v1.vercel.app' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

const OUT_DIR = path.resolve('qa/trade-sites');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  console.log('Starting Multi-Site Multi-Viewport Visual & Interactive QA...');
  const browser = await chromium.launch({ 
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const results = [];

  for (const site of SITES) {
    console.log(`\nTesting site: ${site.name} (${site.url})`);
    const siteResult = { name: site.name, url: site.url, viewports: {}, errors: [] };

    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      const consoleErrors = [];
      page.on('console', msg => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });
      page.on('pageerror', err => consoleErrors.push(err.message));

      try {
        const start = Date.now();
        await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
        const loadTimeMs = Date.now() - start;

        // Perform interactions if on desktop
        if (vp.name === 'desktop') {
          // If interactive sliders exist, drag or click
          const sliders = await page.$$('input[type="range"]');
          if (sliders.length > 0) {
            await sliders[0].evaluate(el => {
              el.value = (parseFloat(el.min) + parseFloat(el.max)) / 2;
              el.dispatchEvent(new Event('input', { bubbles: true }));
              el.dispatchEvent(new Event('change', { bubbles: true }));
            });
            await page.waitForTimeout(300);
          }

          // If tabs exist, click second tab
          const buttons = await page.$$('button');
          if (buttons.length > 1) {
            try {
              await buttons[1].click({ timeout: 1000 });
              await page.waitForTimeout(300);
            } catch (e) {}
          }
        }

        const shotPath = path.join(OUT_DIR, `${site.name}-${vp.name}.png`);
        await page.screenshot({ path: shotPath, fullPage: false });

        siteResult.viewports[vp.name] = {
          loadTimeMs,
          screenshot: shotPath,
          consoleErrorsCount: consoleErrors.length,
        };
        console.log(`  ✓ ${vp.name} (${vp.width}x${vp.height}): ${loadTimeMs}ms, ${consoleErrors.length} errors -> ${path.basename(shotPath)}`);
      } catch (err) {
        console.error(`  ✗ ${vp.name} failed:`, err.message);
        siteResult.errors.push(`${vp.name}: ${err.message}`);
      } finally {
        await page.close();
      }
    }
    results.push(siteResult);
  }

  await browser.close();

  const reportPath = path.join(OUT_DIR, 'qa-summary-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\nQA completed. Report written to ${reportPath}`);
}

run().catch(err => {
  console.error('Fatal error during QA run:', err);
  process.exit(1);
});

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITES = [
  {
    folder: 'ceohabits',
    urls: [
      'https://habits.imthamil.com/',
      'https://habits.imthamil.com/',   // will scroll for 2nd shot
      'https://habits.imthamil.com/',
    ],
    scrolls: [0, 600, 1200],
  },
  {
    folder: 'andyai',
    urls: ['https://andyai.imthamil.com/', 'https://andyai.imthamil.com/'],
    scrolls: [0, 700],
  },
  {
    folder: 'todo',
    urls: ['https://todo.imthamil.com', 'https://todo.imthamil.com'],
    scrolls: [0, 600],
  },
  {
    folder: 'deepseek',
    urls: ['https://deepseek.imthamil.com/', 'https://deepseek.imthamil.com/'],
    scrolls: [0, 500],
  },
  {
    folder: 'ozholidays',
    urls: ['https://ozschoolholidays.imthamil.com', 'https://ozschoolholidays.imthamil.com'],
    scrolls: [0, 700],
  },
];

const WIDTH = 1280;
const HEIGHT = 800;

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

for (const site of SITES) {
  console.log(`\n📸 Capturing ${site.folder}...`);
  for (let i = 0; i < site.urls.length; i++) {
    const page = await browser.newPage();
    await page.setViewport({ width: WIDTH, height: HEIGHT });
    try {
      await page.goto(site.urls[i], { waitUntil: 'networkidle2', timeout: 30000 });
      // Wait a bit for animations
      await new Promise(r => setTimeout(r, 2000));
      if (site.scrolls[i] > 0) {
        await page.evaluate((y) => window.scrollTo({ top: y }), site.scrolls[i]);
        await new Promise(r => setTimeout(r, 800));
      }
      const outPath = path.join(__dirname, 'src/assets/screenshots', site.folder, `${i + 1}.png`);
      await page.screenshot({ path: outPath, type: 'png' });
      console.log(`  ✅ ${i + 1}.png saved`);
    } catch (err) {
      console.error(`  ❌ Failed shot ${i + 1}:`, err.message);
    }
    await page.close();
  }
}

await browser.close();
console.log('\n✨ All screenshots done.');

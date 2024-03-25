import puppeteer from 'puppeteer';
import path from 'path';

async function runBrowser() {
  // load the extension
  // const extensionPath = path.join(__dirname, 'extensions/webrtc');
  // const screenshotsDir = path.join(__dirname, 'screenshoots');
  const timezone = 'America/Marigot';
  const browser = await puppeteer.launch({
    // must be non-headless
    headless: false,
    userDataDir: path.join(__dirname, 'tmp/profiles/', timezone),
    env: {
      TZ: timezone,
      ...process.env
    }
  });

  // Custom user agent
  const userAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36';

  const page = await browser.newPage();

  // Set custom user agent
  await page.setUserAgent(userAgent);

  // mock timezone
  await page.emulateTimezone(timezone);

  await page.goto('http://localhost:4000/android-traffic-exchange/backend/anon.html');
  // await browser.close();
}

runBrowser();

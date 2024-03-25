import puppeteer from 'puppeteer';
import path from 'path';

async function runBrowser() {
  // load the extension
  const extensionPath = path.join(__dirname, 'extensions/webrtc');
  const screenshotsDir = path.join(__dirname, 'screenshoots');
  const timezone = 'America/Marigot';
  const browser = await puppeteer.launch({
    // must be non-headless
    headless: false,
    userDataDir: path.join(__dirname, 'tmp/profiles/', timezone),
    args: [`--disable-extensions-except=${extensionPath}`, `--load-extension=${extensionPath}`],
    env: {
      TZ: timezone,
      ...process.env
    }
  });

  const page = await browser.newPage();

  // mock timezone
  await page.emulateTimezone(timezone);

  // test it with browserleaks.com
  // await page.goto('https://browserleaks.com/webrtc');
  await page.goto('https://proxy6.net/en/privacy');

  // psss: just me hiding my details
  // await page.evaluate(() => $('#rtc-ipv4 a').css('-webkit-filter', 'blur(5px)'));

  // taking evidence
  await page.screenshot({ path: screenshotsDir + '/browserleaks.png' });

  // await browser.close();
}

runBrowser();

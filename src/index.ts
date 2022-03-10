import playwright from 'playwright';

async function main() {
  /** Launch browser */
  const browser = await playwright.chromium.launch({ headless: false });

  /** Create a context */
  const context = await browser.newContext();

  /** Create a page */
  const page = await context.newPage();

  /** Carry out actions */
  await page.goto('https://google.com');
  await page.locator('[title="Search"]').fill('Microsoft Playwright');
  await page.locator('[title="Search"]').press('Enter');
  await page.locator('#result-stats').waitFor({ state: 'visible' });
  await page.screenshot({ path: './screenshots/page.png' });

  /** Close the browser */
  await browser.close();
}

main();
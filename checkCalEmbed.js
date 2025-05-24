const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Listen for console messages
  page.on('console', msg => {
    console.log(`Console: ${msg.type()} - ${msg.text()}`);
  });

  // Listen for request failures
  page.on('requestfailed', request => {
    console.log(`Request failed: ${request.url()} - ${request.failure().errorText}`);
  });

  // Intercept network responses
  page.on('response', response => {
    if (response.url().includes('embed.js')) {
      console.log(`Embed.js loaded with status: ${response.status()}`);
    }
  });

  // Go to your page
  await page.goto('https://www.retailsuccesscoach.com/profit-performance-call', { waitUntil: 'networkidle' });

  // Wait a few seconds to capture async console logs
  await page.waitForTimeout(5000);

  await browser.close();
})();

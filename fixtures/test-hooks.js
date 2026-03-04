const { test: base } = require('@playwright/test');

const test = base;

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshot = await page.screenshot({ fullPage: true });

    await testInfo.attach('full-page', {
      body: screenshot,
      contentType: 'image/png'
    });
  }
});

module.exports = { test };
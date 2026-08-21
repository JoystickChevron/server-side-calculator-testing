const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

Before(async function () {
  this.browser = await chromium.launch({
    headless: true,
  });
  this.browserContext = await this.browser.newContext();
  this.page = await this.browserContext.newPage();
});

After(async function ({ status }) {
  if (status !== "passed" && this.page) {
    await this.page.screenshot({
      path: `src/reporters/screenshot-${Date.now()}.png`,
    });
  }
  await this.browserContext?.close();
  await this.browser?.close();
});

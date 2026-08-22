const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const pageConfig = require("../pages/pages.config");

Before(async function () {
  this.browser = await chromium.launch({
    headless: false,
  });
  this.browserContext = await this.browser.newContext();
  this.page = await this.browserContext.newPage();
  this.pages = pageConfig(this.page);
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

const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const pageConfig = require("../pages/pages.config");
const dotenv = require("dotenv");
dotenv.config();
Before(async function () {
  this.browser = await chromium.launch({
    headless: false,
  });
  this.browserContext = await this.browser.newContext();
  this.page = await this.browserContext.newPage();
  this.pages = pageConfig(this.page);
});

After(async function ({ status }) {
  const screenshotBuffer = await this.page.screenshot({
    path: `src/reporters/screenshot-${Date.now()}.png`,
    fullPage: true,
  });
  this.attach(screenshotBuffer, "image/png");
  await this.browserContext?.close();
  await this.browser?.close();
});

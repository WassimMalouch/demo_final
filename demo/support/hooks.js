const { Before, After, setDefaultTimeout, AfterStep } = require("@cucumber/cucumber");
const { chromium,firefox,webkit } = require("playwright");
const {config} = require("../playwright.config")
require('dotenv').config()
setDefaultTimeout(10000 * 4)
Before(async function () {
  console.log(this.parameters)
  try {
    switch (this.parameters.browser) {
      case "chromium":
        this.browser = await chromium.launch(config.browserOptions);
        break;
      case "webkit":
        this.browser = await webkit.launch(config.browserOptions);
        break;
      case "firefox":
        this.browser = await firefox.launch(config.browserOptions);
        break;
      default:
        this.browser = await chromium.launch(config.browserOptions);
        break;
    }
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    await this.page.goto("https://www.demoblaze.com/");
    // console.log("Captured web site " + this.page.title);
  } catch (error) {
    console.log(error.toString())
  }
});

After(async function ({result,testCaseStartedId,pickle}) {
  this.browser.close()
});

AfterStep(async function ({result,pickleStep,testStepId}) {
  const screenshotPath = `${process.env.screenshoots_path}/${this.parameters.browser}/${result.status + pickleStep.id}.png`
   await this.page.screenshot({
    path: screenshotPath,
    fullPage: true,
  });
  this.attach(String(screenshotPath), 'application/json');
});
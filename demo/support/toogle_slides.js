const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
When('I click on {string} button',async function (string) {
    this.initialPic = await this.page.locator("#carouselExampleIndicators > div > div.carousel-item.active > img").getAttribute("src") 
    const right_button =  await this.page.locator("#carouselExampleIndicators > a.carousel-control-next > span.carousel-control-next-icon") 
    await right_button.click() ;
    await this.page.waitForTimeout(1000)
    
  });
  Then('I see another image',async function () {
    this.secondPic = await this.page.locator("#carouselExampleIndicators > div > div.carousel-item.active > img").getAttribute("src") 
    expect(this.secondPic).not.toEqual(this.initialPic)
  });
  When('I click again on the other {string} button',async function (string) {    
    const left_button =  await this.page.locator("#carouselExampleIndicators > a.carousel-control-prev > span.carousel-control-prev-icon")
    await left_button.click();
    await this.page.waitForTimeout(1000)    
  });
  Then('I see the initial image',async function () {
    const previousPic = await this.page.locator("#carouselExampleIndicators > div > div.carousel-item.active > img").getAttribute("src")
    expect(previousPic).toEqual(this.initialPic);
  });
const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given("I am on {string} page", 
async function (expectedTitle) {
  const title = await this.page.locator("#nava").textContent();
  expect(title.trim()).toEqual(expectedTitle);
});
When("I click categories link", 
async function () {
  const categories_button = await this.page.locator("#cat").click();
});
Then("I see {string} , {string} and {string} under categories",
  async function (string, string2, string3) {
    const phones = await this.page
        .getByRole("link", { name: "Phones" })
        .textContent();
      const laptops = await this.page
        .getByRole("link", { name: "Laptops" })
        .textContent();
      const monitoring = await this.page
        .getByRole("link", { name: "Monitors" })
        .textContent();
      expect(phones.trim()).toEqual(string);
      expect(laptops.trim()).toEqual(string2);
      expect(monitoring.trim()).toEqual(string3);
  }
);

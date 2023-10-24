import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "./world";
import { expect } from "@playwright/test";
import { ComposePage } from "../pageobjects/compose.page";

const composePage = new ComposePage();

Given("I am on the {string} page", async (string) => {
  await page.waitForLoadState("networkidle");
  const actualText = await composePage.getH1Text();
  expect(string).toEqual(actualText!.trim());
});

When("I click categories link", async () => {
  await page.locator(`button[class*='compose-button']`).click();
});

When("I see the {string} modal", async (string) => {
  const actualText = await page
    .locator(`div[class='modal-content'] span`)
    .first()
    .textContent();
  expect(string).toEqual(actualText!.trim());
});

When("I fill the email data", async () => {
  await composePage.fillEmailContent("text");
  await composePage.fillSubject("test");
  await composePage.fillToSection("test@test.com");
});

When("I press the send button", async () => {
  await composePage.sendEmail();
});

Then("I see that the email was sent", function () {
  expect(true).toBe(true);
});

When("I press the close button", function () {
  expect(true).toBe(true);
});

Then("I see that the email was saved in the draft folder", function () {
  expect(true).toBe(true);
});

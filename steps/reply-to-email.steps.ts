import { Given, When, Then } from "@cucumber/cucumber";
import { ComposePage } from "../pageobjects/compose.page";
import { InboxPage } from "../pageobjects/inbox.page";
import { EmailSection } from "../pageobjects/base.page";

const composePage = new ComposePage();
const inboxPage = new InboxPage();

Given("I am on the {string} section", async (string) => {
  await inboxPage.navigateToEmailSection(
    EmailSection[string.toUpperCase() as keyof typeof EmailSection]
  );
});

When("I open an email from {string}", async (string) => {
  await inboxPage.openEmail(string);
});

When("I click {string}", function (string) {
  inboxPage.replyToEmail();
});

Then("data is prefilled", function () {});

When("I fill the email body", async () => {
  await composePage.fillEmailContent("text");
});

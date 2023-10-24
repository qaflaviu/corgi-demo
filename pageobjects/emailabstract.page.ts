import { BasePage } from "./base.page";
import { page } from "../steps/world";

export abstract class EmailAbstractPage extends BasePage {
  async openEmail(from: string) {
    await page.getByText(from).first().click();
  }

  async getEmailBody(): Promise<string> {
    return "";
  }
  async replyToEmail() {
    await page.getByText("Reply").click();
  }

  async forwardEmail() {}
  async printEmail() {}
  async markAsSpam() {}
  async deleteEmail() {}
}

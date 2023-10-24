import { BasePage } from "./base.page";
import { page } from "../steps/world";

export class ComposePage extends BasePage {
  async fillToSection(email: string) {
    await page.getByPlaceholder("To").fill(email);
  }

  async fillSubject(subject: string) {
    await page.getByPlaceholder("Subject").fill(subject);
  }

  async fillEmailContent(text: string) {
    await (await page.waitForSelector(`div[id^='taTextElement']`)).fill(text);
  }

  async sendEmail() {
    await (await page.waitForSelector(`button[class='btn btn-send']`)).click();
  }

  async navigateToEmailSection(section: EmailSection) {
    await (
      await page.waitForSelector(`href="#/components/mail/${section}"`)
    ).click();
  }
}

export enum EmailSection {
  INBOX = "inbox",
  SENT_MAIL = "sent",
  IMPORTANT = "important",
  DRAFT = "draft",
  SPAM = "spam",
  TRASH = "trash",
}

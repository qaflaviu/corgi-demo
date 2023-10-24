import { page } from "../steps/world";

export abstract class BasePage {
  async waitForPageToLoad(isNetworkIdle = false) {
    await page.waitForLoadState(
      isNetworkIdle ? "networkidle" : "domcontentloaded"
    );
  }

  async pressDefaultSubmitButton() {
    await (await page.waitForSelector(`button[type='submit']`)).click();
    await this.waitForPageToLoad(true);
  }

  async getH1Text(): Promise<string> {
    return await (await page.waitForSelector(`body h1`)).textContent();
  }

  /**
   * Check if element is fully visible in viewport
   * @param cssSelector CSS Selector
   */
  async isElementInViewport(cssSelector: string): Promise<boolean> {
    let inViewport: boolean;
    try {
      await (
        await page.waitForSelector(cssSelector)
      ).waitForElementState("visible");
      inViewport = await page.evaluate((elementSelector) => {
        const bounding = document
          .querySelector(elementSelector)
          .getBoundingClientRect();
        return (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.y >= 0 &&
          bounding.y <= window.innerHeight &&
          (window.innerHeight >= bounding.height + bounding.y
            ? bounding.bottom <=
              (window.innerHeight || document.documentElement.clientHeight)
            : bounding.bottom > window.innerHeight) &&
          bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }, cssSelector);
    } catch (e) {
      inViewport = false;
    }
    return inViewport;
  }
  async navigateToEmailSection(section: EmailSection) {
    await (
      await page.waitForSelector(`div[href="#/components/mail/${section}"]`)
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

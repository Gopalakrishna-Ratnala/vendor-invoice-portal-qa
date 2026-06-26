import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * ConfirmationPage — SauceDemo order confirmation screen
 * URL: https://www.saucedemo.com/checkout-complete.html
 */
export class ConfirmationPage extends BasePage {
  readonly confirmationHeader: Locator;
  readonly confirmationText: Locator;
  readonly backHomeButton: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    super(page);
    this.confirmationHeader = page.locator('.complete-header');
    this.confirmationText = page.locator('.complete-text');
    this.backHomeButton = page.getByTestId('back-to-products');
    this.finishButton = page.getByTestId('finish');
  }

  async getConfirmationHeader(): Promise<string> {
    return this.confirmationHeader.innerText();
  }

  async getConfirmationText(): Promise<string> {
    return this.confirmationText.innerText();
  }

  async isConfirmationVisible(): Promise<boolean> {
    return this.confirmationHeader.isVisible();
  }

  async clickFinish(): Promise<void> {
    await this.finishButton.click();
  }

  async backToProducts(): Promise<void> {
    await this.backHomeButton.click();
  }
}

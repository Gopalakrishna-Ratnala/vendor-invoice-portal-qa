import { Page, Locator } from '@playwright/test';

/**
 * BasePage — shared base class for all SauceDemo page objects
 * Every page extends this to inherit cart helpers and common utilities
 */
export abstract class BasePage {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.pageHeading = page.locator('.title');
  }

  async getBrowserTitle(): Promise<string> {
    return this.page.title();
  }

  async getHeadingText(): Promise<string> {
    return this.pageHeading.innerText();
  }

  async getCartCount(): Promise<string | null> {
    const visible = await this.cartBadge.isVisible();
    return visible ? this.cartBadge.innerText() : null;
  }

  async isCartBadgeVisible(): Promise<boolean> {
    return this.cartBadge.isVisible();
  }

  async goToCart(): Promise<void> {
    await this.cartLink.click();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }
}

import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * InventoryPage — SauceDemo products listing screen
 * URL: https://www.saucedemo.com/inventory.html
 */
export class InventoryPage extends BasePage {
  readonly inventoryItems: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryItems = page.locator('.inventory_item');
    this.sortDropdown = page.getByTestId('product-sort-container');
  }

  async getProductCount(): Promise<number> {
    return this.inventoryItems.count();
  }

  async getProductNames(): Promise<string[]> {
    return this.inventoryItems.locator('.inventory_item_name').allInnerTexts();
  }

  async addProductToCartByName(productName: string): Promise<void> {
    const item = this.inventoryItems.filter({ hasText: productName });
    await item.getByRole('button', { name: /add to cart/i }).click();
  }

  async sortBy(option: string): Promise<void> {
    await this.sortDropdown.selectOption(option);
  }
}

import { test as base } from '@playwright/test';
import { LoginPage, InventoryPage, CartPage, CheckoutPage, ConfirmationPage } from '../pages';

/**
 * Custom Playwright fixture — injects all page objects into every test automatically.
 * Tests import { test, expect } from '../fixtures' instead of @playwright/test
 * so page objects are available as first-class parameters — no manual instantiation needed.
 */

type PageObjects = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  confirmationPage: ConfirmationPage;
};

export const test = base.extend<PageObjects>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  confirmationPage: async ({ page }, use) => {
    await use(new ConfirmationPage(page));
  },
});

export { expect } from '@playwright/test';

import { test, expect } from '../fixtures';
import credentials from '../../test-data/credentials.json';
import products from '../../test-data/products.json';

/**
 * @regression — Cart regression tests
 *
 * TC-R04 | Cart badge not visible on fresh login (empty cart)
 * TC-R05 | Single product adds — badge shows "1"
 * TC-R06 | Cart page shows correct product name
 */

test.describe('@regression | Shopping Cart', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(credentials.valid.username, credentials.valid.password);
  });

  test('TC-R04 | Cart badge is not visible on fresh login', async ({ inventoryPage }) => {
    const visible = await inventoryPage.isCartBadgeVisible();
    expect(visible).toBeFalsy();
  });

  test('TC-R05 | Adding a product increments cart badge to "1"', async ({ inventoryPage }) => {
    await inventoryPage.addProductToCartByName(products.items[0].name);

    const count = await inventoryPage.getCartCount();
    expect(count).toBe('1');
  });

  test('TC-R06 | Cart page shows the correct product name', async ({ inventoryPage, cartPage, page }) => {
    await inventoryPage.addProductToCartByName(products.items[0].name);
    await inventoryPage.goToCart();

    await expect(page).toHaveURL(/.*cart\.html/);

    const itemNames = await cartPage.getCartItemNames();
    expect(itemNames).toContain(products.items[0].name);
  });

});

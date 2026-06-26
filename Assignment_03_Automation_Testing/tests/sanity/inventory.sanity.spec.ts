import { test, expect } from '../fixtures';
import credentials from '../../test-data/credentials.json';
import products from '../../test-data/products.json';

/**
 * @sanity — Inventory page sanity check
 *
 * TC-S03 | Inventory page shows correct product count after login
 */

test.describe('@sanity | Inventory', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(credentials.valid.username, credentials.valid.password);
  });

  test('TC-S03 | Inventory page shows all 6 products', async ({ inventoryPage, page }) => {
    await expect(page).toHaveURL(/.*inventory\.html/);

    const count = await inventoryPage.getProductCount();
    expect(count).toBe(products.totalCount);

    const names = await inventoryPage.getProductNames();
    expect(names).toContain(products.items[0].name);
  });

});

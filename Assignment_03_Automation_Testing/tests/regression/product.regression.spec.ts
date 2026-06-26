import { test, expect } from '../fixtures';
import credentials from '../../test-data/credentials.json';
import products from '../../test-data/products.json';

/**
 * @regression — Product catalogue regression tests
 *
 * TC-R02 | Products sort correctly A→Z
 * TC-R03 | Products sort correctly Z→A
 */

test.describe('@regression | Product Catalogue', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(credentials.valid.username, credentials.valid.password);
  });

  test('TC-R02 | Products sort correctly A→Z', async ({ inventoryPage }) => {
    await inventoryPage.sortBy(products.sortOptions.az);
    const names = await inventoryPage.getProductNames();

    for (let i = 0; i < names.length - 1; i++) {
      expect(names[i].localeCompare(names[i + 1])).toBeLessThanOrEqual(0);
    }
  });

  test('TC-R03 | Products sort correctly Z→A', async ({ inventoryPage }) => {
    await inventoryPage.sortBy(products.sortOptions.za);
    const names = await inventoryPage.getProductNames();

    for (let i = 0; i < names.length - 1; i++) {
      expect(names[i].localeCompare(names[i + 1])).toBeGreaterThanOrEqual(0);
    }
  });

});

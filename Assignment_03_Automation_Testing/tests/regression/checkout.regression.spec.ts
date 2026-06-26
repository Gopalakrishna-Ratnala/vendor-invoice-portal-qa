import { test, expect } from '../fixtures';
import credentials from '../../test-data/credentials.json';
import products from '../../test-data/products.json';
import shipping from '../../test-data/shipping.json';

/**
 * @regression — Checkout form validation regression tests
 *
 * TC-R07 | Submitting empty checkout form shows validation error (NEGATIVE)
 */

test.describe('@regression | Checkout Validation', () => {

  test.beforeEach(async ({ loginPage, inventoryPage, cartPage }) => {
    await loginPage.goto();
    await loginPage.login(credentials.valid.username, credentials.valid.password);
    await inventoryPage.addProductToCartByName(products.items[0].name);
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();
  });

  test('TC-R07 | Empty checkout form submission shows "First Name is required" error @negative', async ({ checkoutPage, page }) => {
    // Submit without filling any field
    await checkoutPage.clickContinue();

    // Should stay on checkout step one
    await expect(page).toHaveURL(/.*checkout-step-one\.html/);

    const isErrorVisible = await checkoutPage.isErrorVisible();
    expect(isErrorVisible).toBeTruthy();

    const errorText = await checkoutPage.getErrorMessage();
    expect(errorText).toContain(shipping.missingFirstName.expectedError);
  });

});

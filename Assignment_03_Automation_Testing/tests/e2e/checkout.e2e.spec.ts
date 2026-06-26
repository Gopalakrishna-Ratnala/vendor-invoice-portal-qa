import { test, expect } from '../fixtures';
import credentials from '../../test-data/credentials.json';
import products from '../../test-data/products.json';
import shipping from '../../test-data/shipping.json';

/**
 * @e2e — Full end-to-end purchase flows
 * Covers the complete happy path from login through order confirmation.
 *
 * TC-E01 | Single product full purchase flow
 * TC-E02 | Multi-product full purchase flow
 */

test.describe('@e2e | Full Checkout Flow', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(credentials.valid.username, credentials.valid.password);
  });

  // ─────────────────────────────────────────────────────────────────────────
  // TC-E01 | Single product — full purchase flow
  // ─────────────────────────────────────────────────────────────────────────
  test('TC-E01 | Single product full purchase — login → add → cart → checkout → confirmation', async ({
    page, inventoryPage, cartPage, checkoutPage, confirmationPage
  }) => {
    // Add one product
    await inventoryPage.addProductToCartByName(products.items[0].name);
    expect(await inventoryPage.getCartCount()).toBe('1');

    // Go to cart
    await inventoryPage.goToCart();
    await expect(page).toHaveURL(/.*cart\.html/);
    expect(await cartPage.getCartItemCount()).toBe(1);

    // Checkout
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL(/.*checkout-step-one\.html/);

    await checkoutPage.fillShippingDetails(
      shipping.valid.firstName,
      shipping.valid.lastName,
      shipping.valid.postalCode
    );
    await checkoutPage.clickContinue();
    await expect(page).toHaveURL(/.*checkout-step-two\.html/);

    // Finish order
    await confirmationPage.clickFinish();
    await expect(page).toHaveURL(/.*checkout-complete\.html/);

    // Verify confirmation
    expect(await confirmationPage.isConfirmationVisible()).toBeTruthy();
    expect(await confirmationPage.getConfirmationHeader()).toBe('Thank you for your order!');
    expect(await confirmationPage.getConfirmationText()).toContain('Your order has been dispatched');
  });

  // ─────────────────────────────────────────────────────────────────────────
  // TC-E02 | Multi-product — full purchase flow
  // ─────────────────────────────────────────────────────────────────────────
  test('TC-E02 | Multi-product purchase — 2 items → cart → checkout → confirmation', async ({
    page, inventoryPage, cartPage, checkoutPage, confirmationPage
  }) => {
    // Add two different products
    await inventoryPage.addProductToCartByName(products.items[0].name);
    await inventoryPage.addProductToCartByName(products.items[1].name);
    expect(await inventoryPage.getCartCount()).toBe('2');

    // Verify both items in cart
    await inventoryPage.goToCart();
    await expect(page).toHaveURL(/.*cart\.html/);
    expect(await cartPage.getCartItemCount()).toBe(2);

    const cartItems = await cartPage.getCartItemNames();
    expect(cartItems).toContain(products.items[0].name);
    expect(cartItems).toContain(products.items[1].name);

    // Complete checkout
    await cartPage.proceedToCheckout();
    await checkoutPage.fillShippingDetails(
      shipping.valid.firstName,
      shipping.valid.lastName,
      shipping.valid.postalCode
    );
    await checkoutPage.clickContinue();
    await expect(page).toHaveURL(/.*checkout-step-two\.html/);

    await confirmationPage.clickFinish();
    await expect(page).toHaveURL(/.*checkout-complete\.html/);

    expect(await confirmationPage.isConfirmationVisible()).toBeTruthy();
    expect(await confirmationPage.getConfirmationHeader()).toBe('Thank you for your order!');
  });

});

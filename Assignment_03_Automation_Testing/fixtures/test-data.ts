/**
 * Test fixtures for SauceDemo E2E automation
 * QA Excellence — Assignment 3
 */

export const credentials = {
  valid: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
};

export const shippingDetails = {
  firstName: 'Gopalakrishna',
  lastName: 'Ratnala',
  postalCode: '500081',
};

export const products = {
  backpack: 'Sauce Labs Backpack',
  bikeLight: 'Sauce Labs Bike Light',
};

export const expectedTexts = {
  loginPageTitle: 'Swag Labs',
  inventoryHeading: 'Products',
  cartHeading: 'Your Cart',
  checkoutHeading: 'Checkout: Your Information',
  overviewHeading: 'Checkout: Overview',
  confirmationHeading: 'Thank you for your order!',
  confirmationSubText: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
};

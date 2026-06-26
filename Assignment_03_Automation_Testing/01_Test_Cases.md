# Automation Test Cases — SauceDemo E2E Checkout
**Assignment 3 | QA Excellence | Automation Testing**

---

## Overview

| Item | Detail |
|------|--------|
| Application | SauceDemo — `https://www.saucedemo.com` |
| Framework | Playwright (TypeScript) |
| Pattern | Page Object Model (POM) |
| Total Test Cases | 5 |
| Tester | Gopalakrishna Ratnala |
| Date | June 2026 |

---

## TC-AT01 | Navigate to Home Page — Verify Page Title

| Field | Value |
|-------|-------|
| **TC ID** | TC-AT01 |
| **Type** | ✅ Positive |
| **Description** | Navigate to SauceDemo and verify the browser title and inventory heading after login |
| **Pre-conditions** | Valid credentials: `standard_user` / `secret_sauce` |
| **Steps** | 1. Open `https://www.saucedemo.com` · 2. Verify browser tab title · 3. Login with valid credentials · 4. Verify URL → `/inventory.html` · 5. Verify page heading |
| **Expected Result** | Browser title = `"Swag Labs"` · Page heading = `"Products"` |
| **Page Objects** | `LoginPage`, `InventoryPage` |
| **Assertions** | `expect(pageTitle).toBe('Swag Labs')` · `expect(heading).toBe('Products')` |

---

## TC-AT02 | Browse Products — Validate Product Listing

| Field | Value |
|-------|-------|
| **TC ID** | TC-AT02 |
| **Type** | ✅ Positive |
| **Description** | Verify the product catalogue loads with all 6 items and that sorting works |
| **Pre-conditions** | User is logged in |
| **Steps** | 1. Login · 2. Count inventory items · 3. Check product names · 4. Apply Z→A sort · 5. Verify sort order |
| **Expected Result** | 6 products visible · Backpack in listing · Z→A sort applied correctly |
| **Page Objects** | `LoginPage`, `InventoryPage` |
| **Assertions** | `expect(productCount).toBe(6)` · `expect(productNames).toContain('Sauce Labs Backpack')` |

---

## TC-AT03 | Add Product to Cart — Verify Cart Count Updates

| Field | Value |
|-------|-------|
| **TC ID** | TC-AT03 |
| **Type** | ✅ Positive |
| **Description** | Add two products to cart and verify cart badge count increments correctly |
| **Pre-conditions** | User is logged in, cart is empty |
| **Steps** | 1. Verify cart badge not visible · 2. Add Backpack → verify badge = `"1"` · 3. Add Bike Light → verify badge = `"2"` |
| **Expected Result** | Cart badge updates from hidden → `"1"` → `"2"` |
| **Page Objects** | `LoginPage`, `InventoryPage` |
| **Assertions** | `expect(initialBadgeVisible).toBeFalsy()` · `expect(cartCount).toBe('1')` · `expect(cartCount).toBe('2')` |

---

## TC-AT04 | Proceed to Checkout — Fill Shipping Form

| Field | Value |
|-------|-------|
| **TC ID** | TC-AT04 |
| **Type** | ✅ Positive |
| **Description** | Navigate from cart through checkout form, fill shipping details, and reach the overview page |
| **Pre-conditions** | User is logged in |
| **Steps** | 1. Add product to cart · 2. Go to cart · 3. Verify cart heading + item · 4. Click Checkout · 5. Fill First Name, Last Name, Zip · 6. Click Continue · 7. Verify overview page |
| **Expected Result** | Cart heading = `"Your Cart"` · Checkout heading = `"Checkout: Your Information"` · Overview heading = `"Checkout: Overview"` |
| **Page Objects** | `LoginPage`, `InventoryPage`, `CartPage`, `CheckoutPage` |
| **Test Data** | firstName: `Gopalakrishna`, lastName: `Ratnala`, postalCode: `500081` (from fixtures) |
| **Assertions** | URL checks at each step · heading text verified on each page |

---

## TC-AT05 | Submit Order — Validate Confirmation Message

| Field | Value |
|-------|-------|
| **TC ID** | TC-AT05 |
| **Type** | ✅ Positive |
| **Description** | Complete the full checkout flow and verify the order confirmation message |
| **Pre-conditions** | User is logged in |
| **Steps** | 1. Add product → cart → checkout → fill form → Continue · 2. Click Finish · 3. Verify confirmation header · 4. Verify confirmation sub-text |
| **Expected Result** | URL = `/checkout-complete.html` · Header = `"Thank you for your order!"` · Text contains `"Your order has been dispatched"` |
| **Page Objects** | `LoginPage`, `InventoryPage`, `CartPage`, `CheckoutPage`, `ConfirmationPage` |
| **Assertions** | `expect(isVisible).toBeTruthy()` · `expect(confirmHeader).toBe('Thank you for your order!')` |

---

## Test Execution Summary

| TC ID | Description | Page Objects Used | Status |
|-------|-------------|-------------------|--------|
| TC-AT01 | Home page title | LoginPage, InventoryPage | ✅ Pass |
| TC-AT02 | Product listing | LoginPage, InventoryPage | ✅ Pass |
| TC-AT03 | Cart count update | LoginPage, InventoryPage | ✅ Pass |
| TC-AT04 | Checkout form | LoginPage, InventoryPage, CartPage, CheckoutPage | ✅ Pass |
| TC-AT05 | Order confirmation | All 5 page objects | ✅ Pass |
| **Total** | **5 scenarios** | **5 POM classes** | **5/5 Pass** |

---

*Prepared by: Gopalakrishna Ratnala | QA Excellence — Assignment 3 | June 2026*

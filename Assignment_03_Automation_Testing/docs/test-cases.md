# Test Cases — SauceDemo Playwright Automation
**Assignment 3 | QA Excellence | Automation Testing**

---

## Overview

| Item | Detail |
|------|--------|
| Application | SauceDemo — `https://www.saucedemo.com` |
| Framework | Playwright (TypeScript) |
| Pattern | Page Object Model (POM) + Fixture Injection |
| Total Tests | 12 (3 sanity + 7 regression + 2 E2E) |
| Tester | Gopalakrishna Ratnala |
| Date | June 2026 |

---

## Sanity Suite — `tests/sanity/`

| TC ID | Title | Steps | Expected Result | Spec File |
|-------|-------|-------|-----------------|-----------|
| TC-S01 | Login page loads with correct title | Open `/` | Browser title = `"Swag Labs"` | `login.sanity.spec.ts` |
| TC-S02 | Valid login redirects to inventory | Login with valid credentials | URL = `/inventory.html` · heading = `"Products"` | `login.sanity.spec.ts` |
| TC-S03 | Inventory shows all 6 products | Login → observe inventory | Product count = 6 · Backpack in list | `inventory.sanity.spec.ts` |

---

## Regression Suite — `tests/regression/`

| TC ID | Title | Type | Steps | Expected Result | Spec File |
|-------|-------|------|-------|-----------------|-----------|
| TC-R01 | Locked-out user blocked with error | ❌ Negative | Login with `locked_out_user` | Stays on `/` · Error = "Sorry, this user has been locked out" | `auth.regression.spec.ts` |
| TC-R02 | Products sort A→Z correctly | ✅ Positive | Login → sort A→Z | Each product name ≤ next alphabetically | `product.regression.spec.ts` |
| TC-R03 | Products sort Z→A correctly | ✅ Positive | Login → sort Z→A | Each product name ≥ next alphabetically | `product.regression.spec.ts` |
| TC-R04 | Cart badge hidden on fresh login | ✅ Positive | Login → observe badge | Cart badge not visible | `cart.regression.spec.ts` |
| TC-R05 | Adding product increments badge | ✅ Positive | Add 1 product | Badge = `"1"` | `cart.regression.spec.ts` |
| TC-R06 | Cart page shows correct product | ✅ Positive | Add product → view cart | Product name in cart list | `cart.regression.spec.ts` |
| TC-R07 | Empty checkout form shows error | ❌ Negative | Checkout → Continue with no fields | Stays on checkout · Error = "First Name is required" | `checkout.regression.spec.ts` |

---

## E2E Suite — `tests/e2e/`

| TC ID | Title | Steps | Expected Result | Spec File |
|-------|-------|-------|-----------------|-----------|
| TC-E01 | Single product full purchase | Login → add 1 item → cart → checkout form → finish → confirmation | URL `/checkout-complete.html` · "Thank you for your order!" | `checkout.e2e.spec.ts` |
| TC-E02 | Multi-product full purchase | Login → add 2 items → cart → checkout → finish → confirmation | Both items in cart · confirmation header matches | `checkout.e2e.spec.ts` |

---

## Test Data Sources

| File | Used By |
|------|---------|
| `test-data/credentials.json` | TC-S02, TC-R01 + all beforeEach login |
| `test-data/products.json` | TC-S03, TC-R02, TC-R03, TC-R05, TC-R06, TC-E01, TC-E02 |
| `test-data/shipping.json` | TC-R07, TC-E01, TC-E02 |

---

*Prepared by: Gopalakrishna Ratnala | QA Excellence — Assignment 3 | June 2026*

# Test Strategy — SauceDemo Playwright Automation
**QA Excellence | Assignment 3 | Automation Testing**

---

## 1. Objective

Demonstrate end-to-end test automation for an e-commerce application using industry-standard tooling and design patterns, covering the full user journey from login through order confirmation — including both positive and negative test scenarios.

---

## 2. Application Under Test

| Property | Detail |
|----------|--------|
| **Application** | SauceDemo — https://www.saucedemo.com |
| **Type** | Demo e-commerce storefront (purpose-built for automation practice) |
| **Tech Stack** | React SPA with `data-test` attributes on all interactive elements |
| **Why SauceDemo** | Stable, always-live, reflects real-world e-commerce flows (Auth → Products → Cart → Checkout), uses `data-test` attributes enabling resilient locators, and provides built-in test scenarios via locked-out and problem users |

---

## 3. Test Scope

### In Scope
- User authentication (valid login, locked-out user error)
- Product catalogue (listing, sorting)
- Shopping cart (add items, badge count, item names)
- Checkout form validation (positive flow + empty form negative)
- Full end-to-end purchase flows (single and multi-product)

### Out of Scope
- Payment processing (SauceDemo is a demo — no real transactions)
- Mobile / responsive layout testing
- Performance / load testing
- Visual regression testing

---

## 4. Test Classification

| Suite | Tag | Purpose | When to Run |
|-------|-----|---------|-------------|
| **Sanity** | `@sanity` | Critical smoke checks — login works, inventory loads | Every build / PR trigger |
| **Regression** | `@regression` | Broader feature coverage including negative cases | Before release / nightly |
| **E2E** | `@e2e` | Full happy-path purchase journeys | Before release / scheduled nightly |

---

## 5. Test Counts

| Suite | Positive | Negative | Total |
|-------|----------|----------|-------|
| Sanity | 3 | 0 | 3 |
| Regression | 5 | 2 | 7 |
| E2E | 2 | 0 | 2 |
| **Total** | **10** | **2** | **12** |

---

## 6. Tooling

| Tool | Version | Purpose |
|------|---------|---------|
| Playwright | ^1.44.0 | Browser automation framework |
| TypeScript | ^5.0.0 | Type-safe test authoring |
| Node.js | ≥ 18.x | Runtime environment |
| GitHub Actions | — | CI/CD pipeline (PR + push triggers) |

---

## 7. Design Patterns

### Page Object Model (POM)
Each screen in SauceDemo has a dedicated class under `pages/`. Locators are defined once per class and reused across all tests — a UI change requires updating only one file.

```
BasePage (shared: cart badge, heading, navigation)
  ├── LoginPage
  ├── InventoryPage
  ├── CartPage
  ├── CheckoutPage
  └── ConfirmationPage
```

### Playwright Fixture Injection
`tests/fixtures.ts` extends Playwright's base `test` with all page objects pre-instantiated. Tests declare what they need as parameters — no `new LoginPage(page)` inside test bodies.

### Data-Driven Testing
All test inputs (credentials, product names, shipping details) live in `test-data/*.json`. Tests import data by key — changing a test user or product requires only a JSON edit, not a code change.

---

## 8. Locator Strategy

Priority order (most resilient → least resilient):

1. `getByTestId()` — SauceDemo provides `data-test` attributes on all form elements
2. `getByRole()` — for buttons (`Add to cart`, `Finish`)
3. `locator('.class')` — for layout elements (`.inventory_item`, `.complete-header`)
4. CSS/XPath — not used (too fragile)

---

## 9. CI/CD Integration

Tests run automatically via GitHub Actions on:
- Every push to `main` touching `Assignment_03_Automation_Testing/`
- Every pull request targeting `main`

The HTML report is uploaded as a build artifact after each run.

---

## 10. Entry & Exit Criteria

| Criteria | Definition |
|----------|------------|
| **Entry** | SauceDemo is reachable; Node ≥ 18; Playwright browsers installed |
| **Exit (Pass)** | All 12 tests pass; 0 failures; HTML report generated |
| **Exit (Fail)** | Any test fails; pipeline blocks merge |

---

*Prepared by: Gopalakrishna Ratnala | QA Excellence — Assignment 3 | June 2026*

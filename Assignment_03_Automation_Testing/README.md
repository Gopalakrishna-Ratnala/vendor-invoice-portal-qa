# Assignment 3 — Automation Testing
**QA Excellence | Playwright E2E Automation — SauceDemo**

---

## Overview

End-to-end automation test suite for [SauceDemo](https://www.saucedemo.com) using **Playwright + TypeScript** and the **Page Object Model** pattern — covering authentication, product catalogue, cart management, checkout validation, and full purchase flows.

---

## Project Structure

```
Assignment_03_Automation_Testing/
├── playwright.config.ts          # Config — reporters, baseURL, testIdAttribute
├── package.json                  # Scripts for sanity / regression / e2e suites
├── tsconfig.json
├── pages/                        # Page Object Model
│   ├── BasePage.ts               # Shared base — cart helpers, heading, navigation
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── ConfirmationPage.ts
│   └── index.ts                  # Barrel export
├── test-data/                    # JSON fixtures + TypeScript types
│   ├── credentials.json
│   ├── products.json
│   ├── shipping.json
│   └── types.ts
├── tests/
│   ├── fixtures.ts               # Playwright fixture injection (page object DI)
│   ├── sanity/                   # @sanity — 3 smoke tests
│   ├── regression/               # @regression — 7 tests (incl. 2 negative)
│   └── e2e/                      # @e2e — 2 full purchase flows
├── docs/
│   ├── test-strategy.md          # Testing approach, scope, tooling decisions
│   ├── test-cases.md             # Full test case matrix
│   └── test-execution-report.md  # Execution results and summary
└── .github/workflows/
    └── playwright-tests.yml      # GitHub Actions CI pipeline
```

---

## Test Suites

| Suite | Tag | Tests | Coverage |
|-------|-----|-------|----------|
| Sanity | `@sanity` | 3 | Login page loads, valid login, inventory count |
| Regression | `@regression` | 7 | Locked-out user ❌, sort A→Z/Z→A, cart badge, cart items, empty checkout ❌ |
| E2E | `@e2e` | 2 | Single-product purchase, multi-product purchase |
| **Total** | | **12** | **10 positive + 2 negative** |

---

## Quick Start

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run by suite
npm run test:sanity
npm run test:regression
npm run test:e2e

# Watch in browser (headed mode)
npm run test:headed

# Open HTML report
npm run report
```

---

## Key Design Decisions

**`BasePage.ts`** — All page objects extend a shared base class that provides cart badge, heading text, and navigation helpers. Changes to shared behaviour need only one update.

**Fixture injection (`tests/fixtures.ts`)** — Uses Playwright's `test.extend()` so all page objects are injected into tests as parameters. No `new LoginPage(page)` inside test bodies.

**Data-driven via JSON** — All test inputs live in `test-data/*.json`. Swapping a credential or product name is a JSON edit, not a code change.

**Negative tests** — TC-R01 (locked-out user) and TC-R07 (empty checkout form) verify that the application handles failure paths correctly — not just happy paths.

---

## CI/CD

GitHub Actions runs the full suite on every push or pull request to `main` touching this folder. The HTML + JSON reports are uploaded as build artifacts.

---

*Prepared by: Gopalakrishna Ratnala | QA Excellence — Assignment 3 | June 2026*

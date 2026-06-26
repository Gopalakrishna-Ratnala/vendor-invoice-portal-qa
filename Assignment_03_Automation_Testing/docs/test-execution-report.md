# Test Execution Report — SauceDemo Playwright Automation
**Assignment 3 | QA Excellence | Automation Testing**

---

## Execution Summary

| Property | Detail |
|----------|--------|
| **Tester** | Gopalakrishna Ratnala |
| **Date** | June 2026 |
| **Application** | SauceDemo — https://www.saucedemo.com |
| **Environment** | macOS, Chrome (local) · Ubuntu (GitHub Actions CI) |
| **Framework** | Playwright 1.44.x + TypeScript |
| **Total Tests** | 12 |
| **Passed** | 12 |
| **Failed** | 0 |
| **Skipped** | 0 |
| **Total Duration** | ~6.5s |

---

## Results by Suite

| Suite | Tests | Passed | Failed | Duration |
|-------|-------|--------|--------|----------|
| @sanity | 3 | 3 | 0 | ~2s |
| @regression | 7 | 7 | 0 | ~3s |
| @e2e | 2 | 2 | 0 | ~2s |
| **Total** | **12** | **12** | **0** | **~6.5s** |

---

## Detailed Results

| TC ID | Test Name | Suite | Result | Duration |
|-------|-----------|-------|--------|----------|
| TC-S01 | Login page loads with correct browser title | Sanity | ✅ Pass | ~0.3s |
| TC-S02 | Valid credentials redirect to inventory page | Sanity | ✅ Pass | ~1.0s |
| TC-S03 | Inventory page shows all 6 products | Sanity | ✅ Pass | ~0.8s |
| TC-R01 | Locked-out user sees error message | Regression | ✅ Pass | ~0.5s |
| TC-R02 | Products sort correctly A→Z | Regression | ✅ Pass | ~0.5s |
| TC-R03 | Products sort correctly Z→A | Regression | ✅ Pass | ~0.5s |
| TC-R04 | Cart badge is not visible on fresh login | Regression | ✅ Pass | ~0.4s |
| TC-R05 | Adding a product increments cart badge to "1" | Regression | ✅ Pass | ~0.5s |
| TC-R06 | Cart page shows the correct product name | Regression | ✅ Pass | ~0.6s |
| TC-R07 | Empty checkout form shows validation error | Regression | ✅ Pass | ~0.8s |
| TC-E01 | Single product full purchase flow | E2E | ✅ Pass | ~1.1s |
| TC-E02 | Multi-product full purchase flow | E2E | ✅ Pass | ~1.1s |

---

## Negative Test Coverage

Two negative tests were included to verify the application handles failure scenarios correctly:

| TC ID | Scenario | Verified |
|-------|----------|---------|
| TC-R01 | Locked-out user cannot log in | Error message = "Sorry, this user has been locked out" · no redirect |
| TC-R07 | Empty checkout form cannot be submitted | Stays on checkout page · "First Name is required" error shown |

---

## Issues Found

None. All 12 test cases passed on the first clean run.

---

## Conclusion

The SauceDemo e-commerce application passed all automated test cases covering authentication, product catalogue, cart management, checkout validation, and full end-to-end purchase flows. The test suite is integrated into GitHub Actions CI and runs automatically on every push to `main`.

---

*Prepared by: Gopalakrishna Ratnala | QA Excellence — Assignment 3 | June 2026*

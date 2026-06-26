import { test, expect } from '../fixtures';
import credentials from '../../test-data/credentials.json';

/**
 * @regression — Authentication regression tests
 * Covers negative login scenarios not included in sanity.
 *
 * TC-R01 | Locked-out user sees specific error message (NEGATIVE)
 */

test.describe('@regression | Authentication', () => {

  test('TC-R01 | Locked-out user sees error message — login blocked @negative', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login(credentials.lockedOut.username, credentials.lockedOut.password);

    // Should stay on login page — no redirect to inventory
    await expect(page).toHaveURL('/');

    const isErrorVisible = await loginPage.isErrorVisible();
    expect(isErrorVisible).toBeTruthy();

    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Sorry, this user has been locked out');
  });

});

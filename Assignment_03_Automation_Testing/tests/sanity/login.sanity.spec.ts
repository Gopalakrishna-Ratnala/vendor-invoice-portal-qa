import { test, expect } from '../fixtures';
import credentials from '../../test-data/credentials.json';

/**
 * @sanity — Login sanity checks
 * Fast smoke tests: if these fail, stop the pipeline immediately.
 *
 * TC-S01 | Login page loads with correct browser title
 * TC-S02 | Valid credentials redirect to inventory page
 */

test.describe('@sanity | Login', () => {

  test('TC-S01 | Login page loads with correct browser title', async ({ loginPage }) => {
    await loginPage.goto();

    const title = await loginPage.getBrowserTitle();
    expect(title).toBe('Swag Labs');
  });

  test('TC-S02 | Valid credentials redirect to inventory page', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login(credentials.valid.username, credentials.valid.password);

    await expect(page).toHaveURL(/.*inventory\.html/);

    const heading = await loginPage.getHeadingText();
    expect(heading).toBe('Products');
  });

});

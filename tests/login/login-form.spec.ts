import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';

test.describe('Login form tests', () => {
    let loginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goToHomePage();
    });

    test('Login form tests', async ({page}) => {
        await loginPage.loginToApplication('error_user', '1234');
        await expect(loginPage.loginDetailsMismatchError).toBeVisible();
    });

})

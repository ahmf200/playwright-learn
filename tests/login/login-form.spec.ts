import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});


test.describe('Login form tests', () => {
    test('incorrect login credentials', async ({page}) => {
        //TODO: Set up page object/fixture for login form so we only need to change things in one place
        const usernameField = page.getByTestId('username');
        const passwordField = page.getByTestId('password');
        const loginButton = page.getByTestId('login-button');
        const loginDetailsMismatchError = page.getByTestId('error');

        await usernameField.click();
        await usernameField.fill('error_user');
        await passwordField.click();
        await passwordField.fill('1234');
        await loginButton.click();
        await expect(loginDetailsMismatchError).toBeVisible();
    });
})

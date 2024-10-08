import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('open page and login button is visible', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await expect(loginPage.loginButton).toBeVisible();
    // await page.goto('/');
    // const loginButton = "login-button";
    // await expect(page.getByTestId(loginButton)).toBeVisible();
});
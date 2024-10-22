import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';

test('open page and login button is visible', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await expect(loginPage.loginButton).toBeVisible();
});
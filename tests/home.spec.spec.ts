import { test, expect } from '@playwright/test';

test('open page and login button is visible', async ({page}) => {
    await page.goto('/');
    const loginButton = "login-button";
    await expect(page.getByTestId(loginButton)).toBeVisible();
});
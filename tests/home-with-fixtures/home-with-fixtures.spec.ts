import { expect, test } from '../../fixtures/base.ts';

test('open page and login button is visible', async ({ loginPage }) => {
    await loginPage.goToHomePage();
    await expect(loginPage.loginButton).toBeVisible();
});
import { expect, test } from '../../fixtures/base.ts';

test.describe('Login form tests - with fixture', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToHomePage();
    });

    test('Login form tests - with fixture', async ({ loginPage }) => {
        await loginPage.loginToApplication('error_user', '1234');
        await expect(loginPage.loginDetailsMismatchError).toBeVisible();
    });

})

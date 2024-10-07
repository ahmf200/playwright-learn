import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameField: any;
    readonly passwordField: any;
    readonly loginButton: any;
    readonly loginDetailsMismatchError: any;
    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByTestId('username');
        this.passwordField = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
        this.loginDetailsMismatchError = page.getByTestId('error');
    }

    async goToHomePage() {
        await this.page.goto('/');
    }

    async loginToApplication(username: any, password: any) {
        await this.usernameField.click();
        // await this.usernameField.fill('error_user');
        await this.usernameField.fill(username);
        await this.passwordField.click();
        // await this.passwordField.fill('1234');
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async loginButtonIsVisible() {
        await expect(this.page.getByTestId(this.loginButton)).toBeVisible();
    }
}
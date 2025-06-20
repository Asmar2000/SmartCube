export class LoginPage {
    constructor(page) {
        this.page = page;
        this.signInButton = `[title='Sign in']`;
        this.emailInput = '.email-input-type input';
        this.passwordInput = `input[name='password']`;
        this.loginButton = 'div#modalButtons > .bigger.button.filled.login-button.marked';
        this.errorMessage = '#modalContent';
        this.loggedInIndicator = '.userMenu';
    }

    async goto() {
        await this.page.goto('https://owasp.glueup.com/');
    }

    async validLogin(userData) {
        await this.page.click(this.signInButton);
        await this.page.fill(this.emailInput, userData.existingEmail);
        await this.page.fill(this.passwordInput, userData.password);
        await this.page.click(this.loginButton);
    }

    async invalidLogin(userData) {
        await this.page.click(this.signInButton);
        await this.page.fill(this.emailInput, userData.existingEmail);
        await this.page.fill(this.passwordInput, "WrongPassword!");
        await this.page.click(this.loginButton);
    }

    async isLoggedIn() {
                await this.page.waitForURL('owasp.glueup.com/my/home/');
    }

    async getErrorMessage() {
        return await this.page.locator(this.errorMessage).textContent();
    }
}

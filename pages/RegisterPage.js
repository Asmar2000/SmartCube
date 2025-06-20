export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.emailInput = '.email-input-type input';
        this.TermsCheckbox = 'input[name="hasAgreedWithTerms"]';
        this.firstNameInput = 'input[name="firstName"]';
        this.lastNameInput = 'input[name="lastName"]';
        this.passwordInput = `input[name='password']`;
        this.continueBTN = '.bigger.button.continue-button.filled.marked';
        this.registerButton = '.account-button.bigger.button.filled.marked.tenant';
        this.errorMessage = '#modalContent'; 
    }

    async goto() {
        await this.page.goto('https://owasp.glueup.com/register/account');
    }
    //the following method won't work on production because captcha is enabled
    async registerUser(userData) {
        await this.page.fill(this.emailInput, userData.email);
        await this.page.check(this.TermsCheckbox, { force: true });
        await this.page.click(this.continueBTN);
        await this.page.fill(this.firstNameInput, userData.firstName);
        await this.page.fill(this.lastNameInput, userData.lastName);
        await this.page.fill(this.passwordInput, userData.password);
        await this.page.check(this.TermsCheckbox, { force: true });
        await this.page.click(this.registerButton);
        
    }
    //the following method won't work on production because captcha is enabled
    async successRegistration() {
        await this.page.waitForURL('https://owasp.glueup.com/account/login');

    }
    

    async registerWitExistingEmail(userData) {
        await this.page.fill(this.emailInput, userData.existingEmail);
        await this.page.check(this.TermsCheckbox, { force: true });
        await this.page.click(this.continueBTN);
    }
    async getErrorMessage() {
        await this.page.waitForSelector(this.errorMessage, { state: 'visible' });
    }
}

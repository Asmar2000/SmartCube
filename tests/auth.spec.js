import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { generateUserData } from '../tests/utils/dataGenerator';

test.describe('Authentication Tests', () => {
    let loginPage;
    let registerPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        registerPage = new RegisterPage(page);
    });
    //the follwoing test won't work on production because captcha is enabled
    test('should register a new user successfully', async () => {
        const userData = generateUserData();
        await registerPage.goto();
        await registerPage.registerUser(userData);
        await registerPage.successRegistration();
    });

    test('should not register user with existing email', async () => {
        const userData = generateUserData();
        await registerPage.goto();
        await registerPage.registerWitExistingEmail(userData);
        expect(await registerPage.getErrorMessage())
    });

    test('should login with valid credentials', async () => {
        const userData = generateUserData();
        await loginPage.goto();
        await loginPage.validLogin(userData);
        expect(await loginPage.isLoggedIn())
    });

    test('should not login with invalid credentials', async () => {
        const userData = generateUserData();
        await loginPage.goto();
        await loginPage.invalidLogin(userData);
        expect(await loginPage.getErrorMessage())
    });
});

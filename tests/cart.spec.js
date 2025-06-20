import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Tests', () => {
    let cartPage;

    test.beforeEach(async ({ page }) => {
        cartPage = new CartPage(page);
    });

    test('should add a dynamic product to the cart', async () => {
        await cartPage.goto();
        await cartPage.addRandomProductToCart();

    });
});

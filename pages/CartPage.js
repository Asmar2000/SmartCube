export class CartPage {
    constructor(page) {
        this.page = page;
        this.randomProduct = '.SearchResultsGridCell2_polaroidContainer';
        this.addToCartButton = 'button.AddToCartButton'; 
        this.cartIcon = '[data-testid="cart-icon"]';
    }

    async goto() {
        await this.page.goto('https://www.zazzle.com/store/owasp_foundation/products');
    }

    async addRandomProductToCart() {
        await this.page.waitForSelector(this.randomProduct, { state: 'visible', timeout: 10000 });
        const products = await this.page.$$(this.randomProduct);
        const randomIndex = Math.floor(Math.random() * products.length);
        const product = products[randomIndex];
        await product.click();
        await this.page.waitForSelector(this.addToCartButton, { state: 'visible', timeout: 10000 });
        await this.page.click(this.addToCartButton);
        await this.page.waitForTimeout(2000);
    }
}

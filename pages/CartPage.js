export class CartPage
{
    constructor(page)
    {
        this.page=page
        this.checkoutButton=page.locator('#checkout')
        this.firstName = page.locator('#first-name')
        this.lastname = page.locator('#last-name')
        this.zipCode = page.locator('#postal-code')
        this.continueButton=page.locator('#continue')
    }

    async checkout()
    {
        await this.checkoutButton.click()
        await this.firstName.fill('abc')
        await this.lastname.fill('xyz')
        await this.zipCode.fill('1111')
        await this.continueButton.click()
    }
    
}
export class ProductPage
{
    constructor(page)
    {
        this.page=page
       // this.addTocartBtn = page.locator('.inventory_item button').first()
       this.addTocartBtn = page.getByRole('button', { name: 'Add to cart' })
        this.cartIcon = page.locator('.shopping_cart_link')
        this.cartBadge = page.locator('.shopping_cart_badge')
    }
    async addMultipleProducts(count)
    {
        
        for(let i=0;i<count;i++)
        {
            const buttons = this.page.getByRole('button', { name: 'Add to cart' })
            if (await buttons.count() === 0) break;

             await buttons.first().click();
        }
    }
    async getCartCount()
    {
        return await this.cartBadge.textContent()
    }
    // async addproductTocart()
    // {
    //     await this.addTocartBtn.click()
    // }
    async goToCart()
    {
        await this.cartIcon.click()
    }
    

}
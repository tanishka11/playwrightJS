import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { ProductPage } from '../pages/ProductPage.js'

test('Add to cart test',async({page})=>{

    const loginpage = new LoginPage(page)
    const productpage = new ProductPage(page)

    await page.goto('https://www.saucedemo.com/')
    await loginpage.login('standard_user','secret_sauce')

    await productpage.addMultipleProducts(4)
    await productpage.goToCart()

    //await expect(page.locator('.inventory_item_name')).toBeVisible()
   const cartName = await page.locator('.inventory_item_name').allTextContents()
   expect(cartName.length).toEqual(4)
})

import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { ProductPage } from '../pages/ProductPage.js'
import { CartPage } from '../pages/CartPage.js'

test('Add to cart test',async({page})=>{

    const loginpage = new LoginPage(page)
    const productpage = new ProductPage(page)
    const cartpage = new CartPage(page)

    await page.goto('https://www.saucedemo.com/')
    await loginpage.login('standard_user','secret_sauce')

    await productpage.addproductTocart()
    await productpage.goToCart()

    await expect(page.locator('.inventory_item_name')).toBeVisible()

    await cartpage.checkout()

    await expect(page.getByTitle('title')).toBeVisible()



})
import{test,expect} from '@playwright/test'
import{LoginPage} from '../pages/LoginPage.js'

test('Validate Login Page',async({page})=>{

const loginpage = new LoginPage(page)
await page.goto('https://www.saucedemo.com/')
//await loginpage.login('standard_user','secret_sauce')
await loginpage.login('standard_user','')
//await expect(page).toHaveURL(/inventory/)
await expect(page.locator('h3')).toContainText('Epic sadface: Username')

})
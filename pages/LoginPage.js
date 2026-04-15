export class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginBtn = page.locator('#login-button')
    }
    async login(users,pass)
    {
        await this.username.fill(users)
        await this.password.fill(pass)
        await this.loginBtn.click()
    }
}
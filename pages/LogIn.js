class LogIn {
    
    constructor(page){
        this.page = page;
        this.singin = page.locator('a[data-test="nav-sign-in"]');
        this.email = page.locator('input[id="email"]');
        this.password = page.locator('input[id="password"]');
        this.login = page.locator('input[data-test="login-submit"]');
        this.navmeni = page.locator('a[data-test="nav-menu"]');
        this.singout= page.locator('a[data-test="nav-sign-out"]');
        this.errorMessage = page.locator('div[data-test="login-error"]');
        this.pagetitle = page.locator('h1[data-test="page-title"]');
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.waitForTimeout(500)
    }
    
    async clickOnsignLink(){
        await this.singin.click();
    }
    

     async loginUser(user) {

        await this.email.fill(user.email);
        await this.page.waitForTimeout(500);
        await this.password.fill(user.password);
        await this.page.waitForTimeout(500)
        await this.login.click();
    }

    async clickOnLogin(){
        await this.login.click();
        await this.page.waitForTimeout(500);
    }
    async clickOnLogetUser(){
        await this.navmeni.click();
         await this.page.waitForTimeout(500);
    }

    async clickOnSingOut(){
        await this.singout.click();
         await this.page.waitForTimeout(500);
    }

    
}


export default { LogIn };
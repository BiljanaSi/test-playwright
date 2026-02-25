class RegistrationPage {
    
    constructor(page){
        this.page = page;
        //navigacija
        this.singin = page.locator('a[data-test="nav-sign-in"]');
        this.registrationlink = page.locator('a[data-test="register-link"]');
        //registracija
        this.firstname = page.locator('input[id="first_name"]');
        this.lastname = page.locator('input[id="last_name"]');
        this.dateofbirth = page.locator('input[id="dob"]');
        this.street = page.locator('input[id="street"]');
        this.postalcode = page.locator('input[id="postal_code"]');
        this.city = page.locator('input[id="city"]');
        this.state = page.locator('input[id="state"]');
        this.country = page.locator('select[id="country"]');
        this.phone = page.locator('input[id="phone"]');
        this.email = page.locator('input[id="email"]');
        this.password = page.locator('input[id="password"]');
        this.registerbutton = page.locator('button[data-test="register-submit"]');


    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }

    async clickOnSignin(){
        await this.singin.click();
    }
    
    async clickOnRegistrationLink(){
        await this.registrationlink.click();
    }

    async registration(registrationUser) {
        await this.firstname.fill(registrationUser.firstName);
        await this.lastname.fill(registrationUser.lastName);
        await this.dateofbirth.fill(registrationUser.dateOfBirth);
        await this.street.fill(registrationUser.street);
        await this.postalcode.fill(registrationUser.postalCode);
        await this.city.fill(registrationUser.city);
        await this.state.fill(registrationUser.state);
        await this.country.selectOption({ value: registrationUser.countryValue });
        await this.phone.fill(registrationUser.phone);
        await this.email.fill(registrationUser.email);
        await this.password.fill(registrationUser.password);
        await this.registerbutton.click();
    }
   
    
}


export default { RegistrationPage };
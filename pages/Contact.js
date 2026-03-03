class Contact {
    
    constructor(page){
        this.page = page;
        this.contact = page.locator('a[data-test="nav-contact"]');

        this.firstname = page.locator('input[id="first_name"]');
        this.lastname = page.locator('input[id="last_name"]');
        this.email = page.locator('input[id="email"]');
        this.subject = page.locator('select[id="subject"]');
        this.message = page.locator('textarea[id="message"]');
        this.contactsubmit = page.locator('input[data-test="contact-submit"]');
        
        this.pagetitle = page.locator('h1[data-test="page-title"]');

        this.successmessage = page.locator('.alert.alert-success.mt-3');
        this.firstnameerrormessage = page.locator('div[data-test="first-name-error"]');
        this.messageerror = page.locator('div[data-test="message-error"]');
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }
    
    async clickOnContact(){

        await this.contact.click();
    }

    async Subject(){
        await this.subject.click();
        await this.subject.selectOption({ value : "status-of-order" });  
    }

    async fillForm(validContact) {

        await this.firstname.fill(validContact.firstname);
        await this.lastname.fill(validContact.lastname);
        await this.email.fill(validContact.email); 
        await this.message.fill(validContact.message);
    }

    

     async submitContact() {

        await this.contactsubmit.click();
  }
     async verifySuccess() {

       await expect(this.successmessage).toBeVisible();

  }

     async verifyErrorMessage(){

        await expect(this.firstnameerrormessage).toBeVisible();

         await expect(this.messageerror).toBeVisible();
      
  }

}


export default { Contact };
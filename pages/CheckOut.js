class CheckOut{
 
    constructor(page){
        this.page= page;
        this.home = page.locator('[data-test="nav-home"]');
        // // Items
        this.selectitem = page.locator('img[alt="Combination Pliers"]');
        this.price = page.locator('span[data-test="unit-price"]');
        this.addtocard = page.locator('[data-test="add-to-cart"]');
        this.addttofavorites = page.locator('button[id="btn-add-to-favorites"]');
        this.addonemoreitem = page.locator('button[id="btn-increase-quantity"]');
        this.removeoneitem = page.locator('button[id="btn-decrease-quantity"]');
        this.quantity = page.locator('input[id="quantity-input"]');
        this.cartindicator = page.locator('[data-test="nav-cart"]');
        this.buyproduct = page.locator('span[data-icon="cart-shopping"]');
        this.logeduser = page.locator('a[data-test="nav-menu"]');
        this.userfavorites = page.locator('a[data-test="nav-my-favorites"]');
        this.favoriteCards = page.locator('app-favorites .card.mb-3');
        this.deletefavorites = page.locator('[data-test="delete"]');
       // Billing
        this.proceedbutton = page.locator('button[data-test="proceed-1"]');
        this.proceed = page.locator('button[data-test="proceed-2"]');
        this.street = page.locator('input[data-test="street"]');
        this.city = page.locator('input[data-test="city"]');
        this.state = page.locator('input[data-test="state"]');
        this.country = page.locator('input[data-test="country"]');
        this.postalcode = page.locator('input[data-test="postal_code"]');
        this.proceedtocheckout = page.locator('button[data-test="proceed-3"]');
          // Payment
        this.paymentmethod = page.locator('select[data-test="payment-method"]');
        this.creditcardnumber = page.locator('input[id="credit_card_number"]');
        this.expirationdate = page.locator('input[id="expiration_date"]');
        this.cvv = page.locator('input[id="cvv"]');
        this.cardholdername = page.locator('input[id="card_holder_name"]');
        this.finishbutton = page.locator('button[data-test="finish"]');
        this.paymentsuccessmessage = page.locator('div[data-test="payment-success-message"]');
        


    }
     async clickHome(){
        await this.home.click();
    }

      async selectItem(){
        await this.selectitem.click();
    }
      async addToCard(){
        await this.addtocard.click();
    }

      async addToFavorites(){
        await this.addttofavorites.click();
    }

       async addMoreItem(){
        await this.addonemoreitem.click();
    }
       
        async removeOneItem(){
        await this.removeoneitem.click();
    }

     async cartIndicator(){
        await this.cartindicator.click();
    }

     async proceedButton(){
        await this.proceedbutton.click();
    }

     async proceedToCheckOut(){
        await this.proceed.click();
    }

    async logedUser(){
        await this.logeduser.click();
    }
    
    async userFavorites(){
       await this.userfavorites.click();
    }

    async deleteFavorites(){
        await this.deletefavorites.click();
    }
    async billingAddress(billingData) {
        await this.street.fill(billingData.street);
        await this.state.fill(billingData.state);
        await this.postalcode.fill(billingData.postalCode);
        await this.proceedtocheckout.click();
    }

     async paymentMethod(){
        await this.paymentmethod.click();
        await this.paymentmethod.selectOption({ value : "credit-card" });  
    }

    async payment(paymentData ){
        await this.creditcardnumber.fill(paymentData.creditCardNumber);
        await this.expirationdate.fill(paymentData.expirationDate);
        await this.cvv.fill(paymentData.cvv);
        await this.cardholdername.fill(paymentData.cardHolderName);
        await this.finishbutton.click();

    } 
}

export default { CheckOut };
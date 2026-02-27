import { test, expect } from '@playwright/test'
import { user, billingData, paymentData } from '../test-data/userData';
const { LogIn } = require('../pages/LogIn').default;
const { CheckOut } = require('../pages/CheckOut').default;

test.describe('Shopping Cart & Checkout Flow', () => {
  let loginPage;
  let checkoutPage;

test.beforeEach(async ({ page }) => {

     loginPage  = new LogIn(page);

     checkoutPage = new  CheckOut(page);

    await loginPage.goto();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');

    await loginPage.clickOnsignLink();

    await loginPage.Login(user.email, user.password);

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

    await expect(loginPage.pagetitle).toBeVisible();

});
     test('add a single product to the cart and verify its presence', async ({ page }) => {

    await checkoutPage.clickHome();

    await checkoutPage.selectItem();

    await expect(checkoutPage.price).toBeVisible();

    await expect(checkoutPage.price).toHaveText('14.15');

    await checkoutPage.addToCard();

    await expect(checkoutPage.cartindicator).toHaveText('1');


    await checkoutPage.addMoreItem();

    //await expect(checkout.cartindicator).toHaveText('2');

    await checkoutPage.removeOneItem();

    await expect(checkoutPage.cartindicator).toHaveText('1');

});
test('Should complete the full checkout journey with valid billing info', async ({ page }) => {

    await checkoutPage.clickHome();

    await checkoutPage.selectItem();

    await checkoutPage.addToCard();

    await checkoutPage.cartIndicator();

    await checkoutPage.proceedButton();

    await checkoutPage.proceedToCheckOut();

    await checkoutPage.billingAddress(billingData);

    await checkoutPage.paymentMethod();

    await checkoutPage.payment(paymentData);

    await expect(checkoutPage.paymentsuccessmessage).toHaveText('Payment was successful');

    });
       });
   
 

    
   
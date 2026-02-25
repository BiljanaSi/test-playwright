import { test, expect } from '@playwright/test'
import { user, billingData, paymentData } from '../test-data/userData';
const { LogIn } = require('../pages/LogIn').default;
const { CheckOut } = require('../pages/CheckOut').default;

test('Log in, select one item and check prise', async ({ page }) => {

    const login  = new LogIn(page);

    const checkout = new  CheckOut(page);

    await login.goto();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');

    await login.clickOnsignLink();

    await login.Login(user.email, user.password);

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

    await expect(login.pagetitle).toBeVisible();

    await checkout.Home();

    await checkout.selectItem();

    await expect(checkout.price).toBeVisible();

    await expect(checkout.price).toHaveText('14.15');

    await checkout.addToCard();

    await expect(checkout.cartindicator).toHaveText('1');


    await checkout.addMoreItem();

    //await expect(checkout.cartindicator).toHaveText('2');

    await checkout.removeOneItem();

    await expect(checkout.cartindicator).toHaveText('1');

    await checkout.CartIndicator();

    await checkout.ProceedButton();

    await checkout.ProceedToCheckOut();

    await checkout.BillingAddress(billingData);

    await checkout.PaymentMethod();

    await checkout.Payment(paymentData);

    await expect(checkout.paymentsuccessmessage).toHaveText('Payment was successful');

    });
   
 

    
   
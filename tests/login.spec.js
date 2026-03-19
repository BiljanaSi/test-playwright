const { test } = require('../fixtures/test-hooks');
const { expect } = require('@playwright/test');
import { users, billingData, paymentData } from '../test-data/userData';
const { LogIn } = require('../pages/LogIn').default;


test('Unsuccessful login', async ({ page }) => {

    const login  = new LogIn(page);

    await login.goto();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');

    await login.clickOnsignLink();

    await login.loginUser(users.user4);

    await login.clickOnLogin();

    await expect(login.errorMessage).toBeVisible();

});
test('Unsuccessful login invalid', async ({ page }) => {

    const login  = new LogIn(page);

    await login.goto();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');

    await login.clickOnsignLink();

    await login.loginUser(users.user4);

    await login.clickOnLogin();

    await expect(login.errorMessage).toBeVisible();

});
test('Successful login', async ({ page }) => {

    const login  = new LogIn(page);

    await login.goto();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');

    await login.clickOnsignLink();

    await login.loginUser(users.user2);

    await page.context().storageState({ path: 'auth/user-state.json' });

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

    await expect(login.pagetitle).toBeVisible();

    await login.clickOnLogetUser();

    await login.clickOnSingOut();

});
import { test, expect } from '@playwright/test'
const { LogIn } = require('../pages/LogIn').default;

test('Successful login', async ({ page }) => {

    const login  = new LogIn(page);

    await login.goto();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');

    await login.clickOnsignLink();

    await login.Login('customer@practicesoftwaretesting.com', 'welcome01');

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

    await expect(login.pagetitle).toBeVisible();

    await login.clickOnLogetUser();

    await login.clickOnSingOut();

});
test('Unsuccessful login', async ({ page }) => {

    const login  = new LogIn(page);

    await login.goto();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');

    await login.clickOnsignLink();

    await login.Login('customer@testing.com', 'welcome0101');

    await login.clickOnLogin();

    await expect(login.errorMessage).toBeVisible();

});
test('Unsuccessful login invalid', async ({ page }) => {

    const login  = new LogIn(page);

    await login.goto();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');

    await login.clickOnsignLink();

    await login.Login('customer@testing.com', 'welcome0101');

    await login.clickOnLogin();

    await expect(login.errorMessage).toBeVisible();

});
import { test, expect } from '@playwright/test'
import { registrationUser } from '../test-data/registrationData';

const { RegistrationPage } = require('../pages/RegistrationPage').default;

test('Registration', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    await registrationPage.goto();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/')

    await registrationPage.clickOnSignin();

    await registrationPage.clickOnRegistrationLink();


    await registrationPage.registration(registrationUser);

 });
const { test } = require('../fixtures/test-hooks');
const { expect } = require('@playwright/test');
import { validContact, invalidContact } from '../test-data/contactData';
const { Contact } = require('../pages/Contact').default;


 let contact;

test.beforeEach(async ({ page }) => {

  contact = new Contact(page);

  await contact.goto();
});



test('Should submit contact form successfully with valid data', async ({ page }) => {


    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');

    await contact.clickOnContact();

    await contact.Subject();

    await contact.fillForm(validContact);

    await contact.submitContact();

    await expect(contact.successmessage).toBeVisible();

    await expect(contact.successmessage).toHaveText(' Thanks for your message! We will contact you shortly.');


  });
  test('Should not submit form when mandatory fields are missing', async ({ page }) => {


    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');

    await contact.clickOnContact();

    await contact.Subject();

    await contact.fillForm(invalidContact);

    await contact.submitContact();

    await expect(contact.firstnameerrormessage).toHaveText('First name is required');

    await expect(contact.messageerror).toHaveText('Message is required');


     });
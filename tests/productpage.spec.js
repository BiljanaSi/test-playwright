import { test, expect } from '@playwright/test'
import { user, billingData, paymentData } from '../test-data/userData';
const { LogIn } = require('../pages/LogIn').default;
const { CheckOut } = require('../pages/CheckOut').default;
const { ProductsPage } = require('../pages/ProductsPage').default;

test.describe('Shopping Cart & Checkout Flow', () => {

  let loginPage;
  let checkoutPage;
  let productsPage;

test.beforeEach(async ({ page }) => {

    loginPage = new LogIn(page);
    checkoutPage = new CheckOut(page);
    productsPage = new ProductsPage(page);

    await loginPage.goto();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');

    await checkoutPage.clickHome();
  });

 test('verify that products are sorted alphabetically when A-Z filter is applied', async ({ page }) => {

    await  productsPage.clickOnSortAsc();

    await productsPage.verifyFirstProductStartsWithA();

  });

   test('verify that products are sorted alphabetically when Z-A filter is applied', async ({ page }) => {

    await productsPage.isSortedDesc();

    const sorted = await productsPage.isSortedDesc();

    expect(sorted).toBe(true);

 });

  test('products are sorted Low → High when price filter is applied', async () => {

    await productsPage.clickOnSortPriceLow();

    expect(await productsPage.isPriceSortedAsc()).toBe(true);
  });

  test('products are sorted High → Low when price filter is applied', async () => {

    await productsPage.clickOnSortPriceHigh();

    expect(await productsPage.isPriceSortedDesc()).toBe(true);
  });

  test('products are filtered correctly when searching', async () => {

  await productsPage.searchProduct('Hammer');

  const results = await productsPage.getSearchResults();

  for (const title of results) {
    expect(title.toLowerCase()).toContain('hammer');
  }
});
  });
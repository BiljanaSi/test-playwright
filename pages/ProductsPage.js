class ProductsPage {
    
    constructor(page){
        this.page = page;
        this.sort = page.locator('select[data-test="sort"]');
        this.productNames = page.locator('h5[data-test="product-name"]');
        this.selectitem = page.locator('img[alt="Combination Pliers"]');
        this.price = page.locator('span[data-test="unit-price"]');
        this.addtocard = page.locator('[data-test="add-to-cart"]');
        this.searchInput = page.locator('input[data-test="search-query"]');
        this.searchButton = page.locator('button[data-test="search-submit"]');
        
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }
    
     async clickOnSortAsc(){
        await this.sort.click();
        await this.sort.selectOption({ value : "name,asc" });  
    }

      async verifyFirstProductStartsWithA() {

        const firstProductName = (await this.productNames.first().textContent()).trim();

        if (!firstProductName.startsWith('A')) {
            throw new Error(`First product does not start with A: ${firstProductName}`);
        }

        console.log(`First product verified: ${firstProductName}`);
    }

      async getItemsText() {
        return await this.productNames.allTextContents();
    }

    async isSortedDesc() {
        await this.sort.click();
        await this.sort.selectOption({ value : "name,desc" });  

        const texts = await this.getItemsText();
        for (let i = 0; i < texts.length - 1; i++) {
            if (texts[i].localeCompare(texts[i + 1]) < 0) {
                return false;
            }
        }
        return true;
    }

     async clickOnSortPriceLow() {
        await this.sort.click();
        await this.sort.selectOption({value : "price,desc"});
    }

    async clickOnSortPriceHigh() {
        await this.sort.click();
        await this.sort.selectOption({value : "price,asc"});
    }


    async getPrices() {
        const priceTexts = await this.price.allTextContents();
        return priceTexts.map(p => parseFloat(p.replace('$', '')));
    }

    async isPriceSortedAsc() {
        const prices = await this.getPrices();
        for (let i = 0; i < prices.length - 1; i++) {
            if (prices[i] > prices[i + 1]) return false;
        }
        return true;
    }

    async isPriceSortedDesc() {
        const prices = await this.getPrices();
        for (let i = 0; i < prices.length - 1; i++) {
            if (prices[i] < prices[i + 1]) return false;
        }
        return true;
    }

    async searchProduct(productName) {

    await this.searchInput.fill(productName);

    await this.searchButton.click();
  }
   async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async getSearchResults() {
    return await this.productNames.allTextContents();
  }
  }

export default {ProductsPage};
const { getString } = require('../commons/globals');
const loginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');
//const { expect } = require('chai');

describe('Buy a few things', function () {
    it('should login and put two items into cart', function () {
        
        loginPage.open();
        loginPage.login('standard_user', 'secret_sauce');
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        inventoryPage.backpackToTheCart.waitForClickable();
        inventoryPage.backpackToTheCart.click();
        inventoryPage.onesieToTheCart.scrollIntoView();
        inventoryPage.onesieToTheCart.click();

        inventoryPage.shoppingCart.scrollIntoView();
        inventoryPage.shoppingCart.click();

       browser.debug();

    });




})

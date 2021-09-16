const { getString } = require('../commons/globals');
const loginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');

describe('Buy a few things', function () {
    it('should login and put two items into cart', function () {
        
        loginPage.open();
        loginPage.login('standard_user', 'secret_sauce');

        inventoryPage.backpackToTheCart.waitForClickable();
        inventoryPage.backpackToTheCart.click();
        inventoryPage.$(onesie).scrollTop();
        inventoryPage.onesieToTheCart.click();

        browser.debug();

    });




})

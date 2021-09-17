const loginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');
const checkoutYourInformationPage = require('../pageobjects/checkout.your.information.page');
const checkoutOverviewPage = require('../pageobjects/checkout.overview.page');


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

        cartPage.checkout.click();

        checkoutYourInformationPage.firstName.setValue('Visnja');
        checkoutYourInformationPage.lastName.setValue('Pantic');
        checkoutYourInformationPage.zipCode.setValue('11080');
        checkoutYourInformationPage.continueButton.click();

        expect(checkoutOverviewPage.paymentInformation).toHaveText('SauceCard #31337');
        expect(checkoutOverviewPage.itemTotal).toHaveText('Item total: $37.98');
        expect(checkoutOverviewPage.tax).toHaveText('Tax: $3.04');
        expect(checkoutOverviewPage.total).toHaveText('Total: $41.02');
        checkoutOverviewPage.finishButton.scrollIntoView();
        checkoutOverviewPage.finishButton.click();


    });




})

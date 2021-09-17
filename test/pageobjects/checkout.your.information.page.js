const Page = require('./page');

class CheckoutYourInformationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstName() { return $('#first-name') };
    get lastName() { return $('#last-name') };
    get zipCode() { return $('#postal-code') };
    get continueButton() { return $('#continue') };
    get cancelButton() { return $('#cancel') };

}

module.exports = new CheckoutYourInformationPage();

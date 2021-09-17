const Page = require('./page');

class CheckoutOverview extends Page {
    /**
     * define selectors using getter methods
     */
    get finishButton() { return $('#finish') };
    get paymentInformation() { return $('.summary_value_label') };
    get itemTotal() { return $('.summary_subtotal_label') };
    get tax() { return $('.summary_tax_label') };
    get total() { return $('.summary_total_label') };


}

module.exports = new CheckoutOverview();
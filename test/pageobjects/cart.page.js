const Page = require('./page');

class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get checkout() {return $('#checkout') };
    get continueShopping() {return $('#continue-shopping') };
    get removeButtonFirstItem() {return $('#remove-sauce-labs-bolt-t-shirt')};

}


module.exports = new CartPage();

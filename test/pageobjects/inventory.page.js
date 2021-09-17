const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get backpack() { return $('#item_4_title_link') };
    get backpackToTheCart() { return $('#add-to-cart-sauce-labs-backpack') };

    get bikeLight() { return $('#item_0_title_link') };
    get bikeLightToTheCart() { return $('#add-to-cart-sauce-labs-bike-light') };

    get tShirtBolt() { return $('#item_1_title_link') };
    get tShirtBoltToTheCart() { return $('#add-to-cart-sauce-labs-bolt-t-shirt') };

    get fleeceJacket() { return $('#item_5_title_link') };
    get fleeceJacketToTheCart() { return $('#add-to-cart-sauce-labs-fleece-jacket') };

    get onesie() { return $('#item_2_title_link') };
    get onesieToTheCart() { return $('#add-to-cart-sauce-labs-onesie') };

    get tShirtRed() { return $('#item_3_title_link') };
    get tShirtRedToTheCart() { return $('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)') };

    get shoppingCart() { return $('#shopping_cart_container') };
    get shoppingCartBagde() { return $('.shopping_cart_badge') };
    

}


module.exports = new InventoryPage();

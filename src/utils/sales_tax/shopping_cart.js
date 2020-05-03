import Item from "./item";
window.Item = Item;

export default class ShoppingCart {
  constructor() {
    this.items = {};
  }

  addItems(items) {
    items.forEach(item => this.addItem(item));
  }

  addItem(itemObject) {
    let itemJSON = JSON.stringify({
      categories: itemObject.categories,
      basePrice: itemObject.basePrice,
      name: itemObject.name
    });

    if ( this.items[itemJSON] ) {
      this.items[itemJSON].increaseQuantityBy(itemObject.quantity);
    } else {
      this.items[itemJSON] = new Item(itemObject);
    }
  }

  calculateReceipt() {
    let calculatedReceipt = Object.values(this.items).reduce(
      ({ finalItemPrices, totalSalesTax, total }, item) => {
        const { salesTax, fullName, basePrice } = item;
        const subtotal = basePrice + salesTax;

        finalItemPrices[fullName] = subtotal;
        totalSalesTax += salesTax;
        total += subtotal;

        return {
          finalItemPrices,
          totalSalesTax,
          total,
        };
      },
      {
        finalItemPrices: {},
        totalSalesTax: 0,
        total: 0,
      }
    );

    return calculatedReceipt;
  }
}

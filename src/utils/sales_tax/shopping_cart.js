import Item from "./item";

export default class ShoppingCart {
  constructor() {
    this.items = {};
  }

  addItems(items) {
    items.forEach(item => this.addItem(item));
  }

  itemArray() {
    return Object.values(this.items);
  }

  updateItem(originalItem, changes) {
    if (changes["quantity"] === 0) this.removeItem(originalItem);
    const originalKey = originalItem.generateKey();
    originalItem.update(changes);
    const newKey = originalItem.generateKey();
    if (originalKey !== newKey) {
      delete this.items[originalKey];
      this.items[newKey] = originalItem;
    }
  }

  removeItem(originalItem) {
    delete this.items[originalItem.generateKey()];
  }

  addItem(itemObject) {
    let newItem = new Item(itemObject);
    let itemJSON = newItem.generateKey();

    if ( this.items[itemJSON] ) {
      this.items[itemJSON].update({
        quantity: itemObject.quantity + this.items[itemJSON].quantity
      });
    } else {
      this.items[itemJSON] = newItem;
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

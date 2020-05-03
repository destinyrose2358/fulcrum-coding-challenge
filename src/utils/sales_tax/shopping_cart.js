import Item from "./item";

export default class ShoppingCart {
  constructor() {
    this.items = {};
  }

  addItem(itemObject) {
    const name = Item.generateFullItemName(itemObject);
    if ( this.items[name] ) this.items[name].increaseQuantityBy()
  }

  calculateReceipt() {
    let calculatedReceipt = Object.values(this.items).reduce(
      ({ finalItemPrices, totalSalesTax, total }, item) => {
        const { salesTax, name } = item;
        const subtotal = item.basePrice + salesTax;

        finalItemPrices[name] = subtotal;
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

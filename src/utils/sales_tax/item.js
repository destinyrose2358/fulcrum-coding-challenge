import pick from "lodash.pick";

const CategoriesTaxRates = {
  food: 0,
  medical: 0,
  book: 0,
  basic: 0.1,
  imported: 0.05,
};

const MUTABLE_ATTRIBUTES = ["categories", "name", "basePrice", "quantity"];

export default class Item {

  constructor(itemObject) {
    let { basePrice, categories, quantity, name } = itemObject;
    this.name = name;
    this.categories = new Set((categories.length && categories) || ["basic"]);
    this.quantity = quantity + 0;
    this.fullName = this.generateFullItemName();
    this.basePrice = basePrice;
    this.salesTax = this.findSalesTax();
  }

  update(changes) {
    changes = pick(changes, MUTABLE_ATTRIBUTES);
    Object.entries(changes).forEach(([attribute, newValue]) => {
      this[attribute] = newValue;
    });
    this.fullName = this.generateFullItemName();
    this.salesTax = this.findSalesTax();
  }

  generateKey(item = this) {
    return JSON.stringify({
      categories: item.categories,
      basePrice: item.basePrice,
      name: item.name
    });
  }

  findSalesTax() {
    let { categories, basePrice, quantity } = this;
    let salesTaxRate = [...categories].reduce((currentTotal, categorie) => {
      return currentTotal + CategoriesTaxRates[categorie];
    }, 0);
    return this.roundTax(salesTaxRate * basePrice * quantity);
  }

  roundTax(tax) {
    return Math.ceil(tax * 20) / 20;
  }

  generateFullItemName(itemObject = {
    categories: this.categories,
    name: this.name,
    quantity: this.quantity
  }) {
    let { categories, name, quantity } = itemObject;
    let fullName = `${quantity} `;
    if (categories.has("imported")) fullName += "imported ";
    fullName += name;

    return fullName;
  }
}
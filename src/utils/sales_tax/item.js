
const CategoriesTaxRates = {
  food: 0,
  medical: 0,
  book: 0,
  basic: 0.1,
  imported: 0.05,
};

export default class Item {
  constructor(itemObject) {
    debugger;
    let { basePrice, categories, quantity, name } = itemObject;
    this.name = name;
    this.categories = new Set(categories);
    this.quantity = quantity + 0;
    this.fullName = this.generateFullItemName();
    this.basePrice = basePrice + 0;
    this.salesTax = this.findSalesTax();
  }

  increaseQuantityBy(number) {
    this.quantity += number;
    this.fullName = this.generateFullItemName();
    this.salesTax = this.findSalesTax()
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
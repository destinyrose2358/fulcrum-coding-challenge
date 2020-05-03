
const CategoriesTaxRates = {
  food: 0,
  medical: 0,
  book: 0,
  basic: 0.1,
  imported: 0.05,
};

export default class Item {
  constructor(...itemArray) {
    let { basePrice, categories, quantity } = itemArray;
    this.name = this.generateFullItemName(itemObject);
    this.basePrice = basePrice + 0;
    this.salesTax = this.findSalesTaxFor(itemObject);
    this.categories = categories;
    this.quantity = quantity + 0;
  }

  findSalesTaxFor({ categories, basePrice, quantity }) {
    let salesTaxRate = [...categories].reduce((currentTotal, categorie) => {
      return currentTotal + CategoriesTaxRates[categorie];
    }, 0);
    return this.roundTax(salesTaxRate * basePrice * quantity);
  }

  roundTax(tax) {
    return Math.ceil(tax * 20) / 20;
  }

  generateFullItemName({ categories, name, quantity }) {
    let fullName = `${quantity} `;
    if (categories.has("imported")) fullName += "imported ";
    fullName += name;

    return fullName;
  }
}
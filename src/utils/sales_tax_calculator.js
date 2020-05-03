const CategoriesTaxRates = {
    food: 0,
    medical: 0,
    book: 0,
    basic: 0.1,
    imported: 0.05,
}

const findSalesTaxFor = ({ categories, basePrice, quantity }) => {
    let salesTaxRate = [...categories].reduce((currentTotal, categorie) => {
        return currentTotal + CategoriesTaxRates[categorie];
    }, 0);
    return roundTax(salesTaxRate * basePrice * quantity);
};

const roundTax = (tax) => {
    return Math.ceil(tax * 20) / 20;
}

const generateFullItemName = ({ categories, name, quantity }) => {
    let fullName = `${quantity} `;
    if (categories.has("imported")) fullName += "imported ";
    fullName += name;

    return fullName;
};

window.roundTax = roundTax;

const calculateReceipt = (items) => {
    let calculatedReceipt = items.reduce(({finalItemPrices, totalSalesTax, total}, item) => {
        const salesTax = findSalesTaxFor(item);
        const subtotal = item.basePrice + salesTax;
        const name = generateFullItemName(item);

        finalItemPrices[name] = subtotal;
        totalSalesTax += salesTax;
        total += subtotal;

        return {
            finalItemPrices,
            totalSalesTax,
            total
        }
    }, {
        finalItemPrices: {},
        totalSalesTax: 0,
        total: 0
    });

    return calculatedReceipt;
};

export default calculateReceipt;

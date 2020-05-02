const CategoriesTaxRates = {
    food: 0,
    medical: 0,
    book: 0,
    basic: 0.1,
    imported: 0.05,
}

const findSalesTaxFor = ({ categories, basePrice, quantity }) => {
    let salesTaxRate = categories.reduce((currentTotal, categorie) => {
        return currentTotal + CategoriesTaxRates[categorie];
    });
    return salesTaxRate * basePrice * quantity;
};

const generateItemName = () => {
    
};

const calculateReceipt = (items) => {
    let finalItemPrices = [];
    let totalSalesTax;
    items.reduce(({finalItemPrices, totalSalesTax, total}, item) => {
        const salesTax = findSalesTaxFor(item);
        const subtotal = item.basePrice + salesTax;

        finalItemPrices[]
        return {
            finalItemPrices: [...finalItemPrices, subtotal],
            totalSalesTax: 
        }
    }, {
        finalItemPrices: {},
        totalSalesTax: 0,
        total: 0
    })
};

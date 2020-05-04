# Sales Tax Calculator

This application is a sales tax calculator, built to accept input and return a formatted receipt.

## Technologies

This application uses React, and Sass.

## Running the Application

* `npm install` - installs the node modules
* `npm run start` - starts the application
* Automatically directed to `localhost:3000`
* The application allows you to add items to the receipt, then after pressing `Enter` or the `Add Item` button, it displays the receipt

## Classes

* **_ShoppingCart()_**: A class representing the shopping cart. The application then adds to the cart using **_AddItemForm_**.

* **_Item(itemObject: { basePrice: [Number], categories: [Array], name: [String], quantity: [Integer] }, shoppingCart)_**: A class representing an item. Calculates and/or stores the following attributes:

  * name
  * shoppingCart
  * categories (stored as a Set for fast searching)
  * quantity
  * fullName
  * basePrice
  * salesTax
  * fullPrice

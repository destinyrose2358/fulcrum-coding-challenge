import React from 'react';
import logo from '../logo.svg';
import '../stylings/App.css';
import SalesInput from './sales-input/sales-input';
import ShoppingCart from '../utils/sales_tax/shopping_cart';

function App() {
  window.ShoppingCart = ShoppingCart;
  return (
    <>
      <SalesInput shoppingCart={new ShoppingCart()} />
    </>
  )
}

export default App;

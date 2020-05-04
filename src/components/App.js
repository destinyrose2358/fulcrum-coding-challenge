import React from 'react';
import { Route, Switch } from "react-router-dom"
import logo from '../logo.svg';
import '../stylings/App.scss';
import SalesInput from './sales-input/sales-input';
import ShoppingCart from '../utils/sales_tax/shopping_cart';

const shoppingCart = new ShoppingCart();
window.shoppingCart = shoppingCart;

function App() {
  return (
    <>
      <Switch>
        <Route path="/receipt">
          {/* <SalesReceipt shoppingCart={shoppingCart} /> */}
        </Route>
        <Route path="/">
          <SalesInput shoppingCart={shoppingCart} />
        </Route>
      </Switch>
      
    </>
  )
}

export default App;

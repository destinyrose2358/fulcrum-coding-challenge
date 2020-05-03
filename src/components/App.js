import React from 'react';
import logo from '../logo.svg';
import '../stylings/App.css';
import calculateReceipt from '../utils/sales_tax_calculator';
import SalesInput from './sales-input/sales-input';

function App() {
  return (
    <>
      <SalesInput />
    </>
  )
}

export default App;

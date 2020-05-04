import React from "react";

const ReceiptShow = ({ receipt }) => {
  return (
    <aside
      className="receipt-show"
    >
      <p>Sales Taxes: { receipt.totalSalesTax.toFixed(2) }</p>
      <p>Total: { receipt.total.toFixed(2) }</p>
    </aside>
  )
}

export default ReceiptShow;
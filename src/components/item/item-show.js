import React from "react";

const ItemShow = ({
  item: {
    basePrice,
    fullName,
    salesTax
  }
}) => {
  let fullPrice = basePrice + salesTax + "";
  const decimalIdx = fullPrice.indexOf(".");
  fullPrice = decimalIdx !== -1 ? fullPrice.slice(0, decimalIdx + 3) : fullPrice + ".00";
  return (
    <li>
      <p>{fullName}: {fullPrice}</p>
    </li>
  )
}

export default ItemShow;
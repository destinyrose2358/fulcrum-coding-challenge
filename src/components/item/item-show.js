import React, { useState } from "react";

const ItemShow = ({
  item: {
    fullPrice,
    fullName,
    removeSelf,
    update,
    quantity
  },
  toggleUpdate
}) => {
  fullPrice = (fullPrice).toFixed(2);
  const [quantityText, setQuantityText] = useState(quantity + "");

  return (
    <li>
      <p>
        {fullName}: {fullPrice}
      </p>
      <aside className="item-show">
        <abbr title="Delete Item">
          <i
            className="fas fa-trash-alt"
            onClick={() => {
              removeSelf();
              toggleUpdate();
            }}
          ></i>
          <input
            type="text"
            value={quantityText}
            onChange={(e) => {
              const newValue = e.target.value;
              if ( /^[0-9]*$/.test(newValue) ) setQuantityText(newValue);
              if ( /^[1-9][0-9]*$/.test(newValue) ) update({ quantity: parseInt(newValue) });
              toggleUpdate();
            }}
            onBlur={() => setQuantityText(quantity)}
          />
        </abbr>
      </aside>
    </li>
  );
}

export default ItemShow;
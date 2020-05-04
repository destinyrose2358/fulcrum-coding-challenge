import React, { useState } from "react";

const AddItemForm = ({
  shoppingCart,
  toggleUpdate
}) => {

  const [category, setCategory] = useState("basic");
  const [quantityText, setQuantityText] = useState("1");
  const [quantity, setQuantity] = useState(1);
  const [imported, setImported] = useState(false);
  const [name, setName] = useState("");
  const [basePrice, setBasePrice] = useState("0.00");
  const [basePriceText, setBasePriceText] = useState("0.00");

  const reset = () => {
    setCategory("basic");
    setQuantityText("1");
    setQuantity(1);
    setImported(false);
    setBasePrice("0.00");
    setBasePriceText("0.00");
    setName("");
    toggleUpdate();
  }

  const updateQuantity = (e) => {
    const newValue = e.target.value;
    setQuantityText(newValue);
    if (newValue > 0) setQuantity(parseInt(newValue));
  };

  const updateBasePrice = (e) => {
    let newValueText = e.target.value;
    let newValue = parseFloat(newValueText).toFixed(2);
    setBasePriceText(newValueText);
    if (/^[0-9]*.[0-9]{2}$/.test(newValue)) setBasePrice(newValue);
  }

  return (
    <>
      <form className="items-form">
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label
          forhtml="category"
        >
          Please Select the Category that applies.
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="basic">Basic</option>
          <option value="book">Book</option>
          <option value="food">Food</option>
          <option value="medical">Medical</option>
        </select>
        <label
          forhtml="add-item-quantity"
        >
          Quantity: 
        </label>
        <input
          id="add-item-quantity"
          type="text"
          pattern="[0-9]*"
          value={quantityText}
          min={1}
          onChange={updateQuantity}
          onBlur={() => setQuantityText(quantity)}
        />
        <label
          forhtml="add-item-base-price"
        >
          Base Price:
        </label>
        <input
          id="add-item-base-price"
          type="text"
          pattern="^[0-9]*.[0-9]{2}$"
          min={0}
          value={basePriceText}
          onChange={updateBasePrice}
          onBlur={() => setBasePriceText(basePrice)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            const itemObject = {
              name,
              quantity,
              categories: [category].concat(...(imported ? ["imported"] : [])),
              basePrice: parseFloat(basePrice),
            };

            shoppingCart.addItem(itemObject);

            reset();
          }}
        >
          Add New Item
        </button>
      </form>
    </>
  );
}

export default AddItemForm;
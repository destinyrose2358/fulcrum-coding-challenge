import React from "react";
import AddItemForm from "./add_item_form";
import ItemIndex from "../item/item-index";

const InputTool = ({
  shoppingCart,
  toggleUpdate
}) => {
  return (
    <>
      <AddItemForm shoppingCart={shoppingCart} toggleUpdate={toggleUpdate} />
    </>
  );
}

export default InputTool;
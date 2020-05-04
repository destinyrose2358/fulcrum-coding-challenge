import React from "react";
import AddItemForm from "./add_item_form";
import ItemIndex from "../item/item-index";

const InputTool = ({
  shoppingCart
}) => {
  return (
    <>
      <AddItemForm shoppingCart={shoppingCart} />
    </>
  );
}

export default InputTool;
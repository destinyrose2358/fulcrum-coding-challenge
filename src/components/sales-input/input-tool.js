import React from "react";
import AddItemForm from "./add_item_form";

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
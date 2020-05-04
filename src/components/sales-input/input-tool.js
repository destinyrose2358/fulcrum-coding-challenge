import React from "react";
import AddItemForm from "./add_item_form";

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
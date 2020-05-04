import React from "react";
import ItemShow from "./item-show";

const ItemIndex = ({
  items,
  toggleUpdate
}) => {
  const itemShowComponents = items.map(item => <ItemShow item={item} key={item.generateKey()} toggleUpdate={toggleUpdate} />);

  return (
    <ul>
      {itemShowComponents}
    </ul>
  )
};

export default ItemIndex;
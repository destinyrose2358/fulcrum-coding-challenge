import React from "react";
import ItemShow from "./item-show";

const ItemIndex = (props) => {
  const itemShowComponents = props.items.map(item => <ItemShow item={item} key={item.generateKey()} />);

  return (
    <ul>
      {itemShowComponents}
    </ul>
  )
};

export default ItemIndex;
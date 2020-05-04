import React, { useState } from "react";
import ItemIndex from "../item/item-index";
import ReceiptShow from "../receipt-show";

const BasicInputComponent = (props) => {

  const { Tool } = props;

  const CreatedComponent = ({ shoppingCart, updateSelectedTab, selectedTab, title }) => {

    const setUpdate = useState(false)[1];

    const toggleUpdate = () => setUpdate(update => !update);

    const classTitle = title.split(" ").map(word => word.toLowerCase()).join("-");

    return selectedTab !== title ? (
      <button
        onClick={(e) => {
          e.preventDefault();
          updateSelectedTab(title);
        }}
      >
        {title}
      </button>
    ) : (
      <>
        <ItemIndex
          items={shoppingCart.itemArray()}
          toggleUpdate={toggleUpdate}
        />
        <ReceiptShow receipt={shoppingCart.calculateReceipt()} />
        <div className={`item-input ${classTitle}`}>
          <p>{title}</p>
          <Tool shoppingCart={shoppingCart} toggleUpdate={toggleUpdate} />
        </div>
      </>
    );
  };

  return <CreatedComponent {...props} />
}

export default BasicInputComponent;
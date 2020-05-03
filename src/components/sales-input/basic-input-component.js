import React, { useState } from "react";

const BasicInputComponent = ({
  updateShoppingCart,
  updateSelectedTab,
  selectedTab,
  title,
  render
}) => {
  
  const [state, setState] = useState({
    items: []
  });
  
  return (
    selectedTab !== title ?
      <button
        onClick={
          (e) => {
            e.preventDefault();
            updateSelectedTab(title);
          }
        }
      >
        { title }
      </button>
    :
      <div
        className="input-tab"
      >
        <p>{ title }</p>
        <render updateShoppingCart={updateShoppingCart} />
      </div>
  )
}

export default BasicInputComponent;
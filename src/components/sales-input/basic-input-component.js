import React, { useState } from "react";

const BasicInputComponent = (props) => {

  const { Tool } = props;

  const CreatedComponent = ({ shoppingCart, updateSelectedTab, selectedTab, title }) => {

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
      <div className="input-tab">
        <p>{title}</p>
        <Tool shoppingCart={shoppingCart} />
      </div>
    );
  };

  return <CreatedComponent {...props} />
}

export default BasicInputComponent;
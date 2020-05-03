import React, { useState } from "react";

const BasicInputComponent = ({
  updateItems,
  updateSelectedTab,
  selectedTab,
  title
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
      </div>
  )
}

export default BasicInputComponent;
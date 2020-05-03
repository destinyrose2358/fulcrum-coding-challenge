import React, { useState } from "react";

const BasicInputComponent = ({
  updateItems,
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
        <render updateItems={updateItems} />
      </div>
  )
}

export default BasicInputComponent;
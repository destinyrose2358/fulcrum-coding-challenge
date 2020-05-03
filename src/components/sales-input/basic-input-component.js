import React, { useState } from "react";

const BasicInputComponent = ({
  updateItems,
  updateSelectedTab,
  selectedTab,
  key
}) => {
  
  const [state, setState] = useState({
    input: []
  });
  
  return (
    selectedTab === key ?
      <button
        OnClick={
          (e) => {
            e.preventDefault();
            updateSelectedTab(key);
          }
        }
      >
        { key }
      </button>
    :
      <div
        className="input-tab"
      >
        { key }
      </div>
  )
}
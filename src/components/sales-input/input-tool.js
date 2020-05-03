import React, { useState } from "react";

const InputTool = ({
  updateItems
}) => {

  let [state, setState] = useState({
    items: []
  });

  return (
    <form
      className="items-form"
    >
      <button
        onClick={e => {
          e.preventDefault();
          setState(currentState => ({
            items: [...items, new ]
          }))
        }}
      >
        Add Item
      </button>
    </form>
  )
}
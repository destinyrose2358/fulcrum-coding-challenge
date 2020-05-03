import React, { useState } from "react";
import InputToolTab from "./input-tool-tab";

const SalesInput = (props) => {

  let [state, setState] = useState({
    selectedTab: null,
    send: false
  });

  const updateShoppingCart = (items) => setState({
    items,
    send: true
  });

  const updateSelectedTab = (key) => setState({
    selectedTab: key
  });

  const { send, selectedTab } = state || {};

  return send ? (
    <>"test"</>
  ) : (
    <>
      {/* <RawInputTab
        updateShoppingCart={updateShoppingCart}
        updateSelectedTab={updateSelectedTab}
        selectedTab={selectedTab}
      /> */}
      {/* <InputToolTab
        updateShoppingCart={updateShoppingCart}
        updateSelectedTab={updateSelectedTab}
        selectedTab={selectedTab}
      /> */}
      {/* <FileInputTab
        updateShoppingCart={updateShoppingCart}
        updateSelectedTab={updateSelectedTab}
        selectedTab={selectedTab}
      /> */}
    </>
  );
}

export default SalesInput;
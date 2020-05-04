import React, { useState } from "react";
import InputToolTab from "./input-tool-tab";

const SalesInput = (props) => {

  let [selectedTab, setSelectedTab] = useState("Input Tool");

  const { shoppingCart } = props;

  return (
    <>
      {/* <RawInputTab
        shoppingCart={shoppingCart}
        updateSelectedTab={updateSelectedTab}
        selectedTab={selectedTab}
      /> */}
      <InputToolTab
        shoppingCart={shoppingCart}
        updateSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      {/* <FileInputTab
        shoppingCart={shoppingCart}
        updateSelectedTab={updateSelectedTab}
        selectedTab={selectedTab}
      /> */}
    </>
  );
}

export default SalesInput;
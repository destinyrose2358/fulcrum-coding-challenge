import React, { useState } from "react";
import InputToolTab from "./input-tool-tab";
import { withRouter } from "react-router-dom";

const SalesInput = (props) => {

  let [selectedTab, setSelectedTab] = useState("Input Tool");

  const { shoppingCart, history } = props;

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
      <button
        onClick={(e) => {
          e.preventDefault();
          history.push("/receipt");
        }}
      >
        Calculate Receipt
      </button>
    </>
  );
}

export default withRouter(SalesInput);
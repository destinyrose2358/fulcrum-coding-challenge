import React, { useState } from "react";
import InputToolTab from "./input-tool-tab";

const SalesInput = (props) => {

  let [state, setState] = useState({
    selectedTab: null,
    items: null,
    send: false
  });

  const updateItems = (items) => setState({
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
        updateItems={updateItems}
        updateSelectedTab={updateSelectedTab}
        selectedTab={selectedTab}
      /> */}
      <InputToolTab
        updateItems={updateItems}
        updateSelectedTab={updateSelectedTab}
        selectedTab={selectedTab}
      />
      {/* <FileInputTab
        updateItems={updateItems}
        updateSelectedTab={updateSelectedTab}
        selectedTab={selectedTab}
      /> */}
    </>
  );
}

export default SalesInput;
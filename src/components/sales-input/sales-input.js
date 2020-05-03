import React, { useState } from "react";

const SalesInput = (props) => {

    let [state, setState] = useState({
        selectedTab: null,
        items: null,
        send: false
    });

    const updateItems = (items) => setState(currentState => {
      currentState.items = items;
      currentState.send = true;
    });

    const updateSelectedTab = (key) => setState(currentState => {
      currentState.selectedTab = key;
    })

    const { send, selectedTab } = state;

    return send ? (
      <>"test"</>
    ) : (
      <>
        <RawInputTab
          {...updateItems}
          {...updateSelectedTab}
          {...selectedTab}
        />
        <InputToolTab
          {...updateItems}
          {...updateSelectedTab}
          {...selectedTab}
        />
        <FileInputTab
          {...updateItems}
          {...updateSelectedTab}
          {...selectedTab}
        />
      </>
    );
}
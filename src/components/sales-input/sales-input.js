import React, { useState } from "react";

const SalesInput = (props) => {

    let [state, setState] = useState({
        selectedTab: null,
        items: null,
        send: false
    });

    const updateItems = (items) => setState(currentState => { currentState.items = items });

    return (
        <>
            <RawInputTab updateItems={updateItems} />
            <InputToolTab updateItems={updateItems} />
        </>
    )
}
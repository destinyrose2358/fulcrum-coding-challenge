import React from "react";
import BasicInputComponent from "./basic-input-component";
import InputTool from "./input-tool";

const InputToolTab = (props) => {
    return <BasicInputComponent title={"Input Tool"} Tool={InputTool} {...props} />
}

export default InputToolTab;
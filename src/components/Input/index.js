import React, {useState} from "react";
import { StyledInput } from "./styled";

const Input = () => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <StyledInput name="photoQuery" onChange={onInputChange} value={inputValue} placeholder="example" />
    );
};

export default Input;
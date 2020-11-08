import React, {useState} from "react";
import { StyledInput } from "./styled";

const Input = ({alternativeStyle}) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <StyledInput 
        alternativeStyle={alternativeStyle} 
        name="photoQuery" 
        onChange={onInputChange} 
        value={inputValue} 
        placeholder="Search free high-resolution photos" 
        type="search"
        />
    );
};

export default Input;
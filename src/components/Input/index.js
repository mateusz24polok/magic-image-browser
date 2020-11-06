import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledInput } from "./styled";
import { selectQuery, setQuery } from "../../slices/querySlice";

const Input = () => {
    const dispatch = useDispatch();
    const query = useSelector(selectQuery);

    const onInputChange = (event) => {
        dispatch(setQuery(event.target.value))
    };

    return (
        <StyledInput onChange={onInputChange} value={query} placeholder="example" />
    );
};

export default Input;
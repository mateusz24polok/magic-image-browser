import React from "react";
import { StyledForm } from "./styled";
import Input from "../Input";
import Title from "./Title";
import Description from "./Description";

const Form = ({ onFormSubmit, title, firstLineDescription, secondLineDescription }) => {
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Title title={title} />
            <Description
                firstLineDescription={firstLineDescription}
                secondLineDescription={secondLineDescription}
            />
            <Input />
        </StyledForm>
    );
};

export default Form;
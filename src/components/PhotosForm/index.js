import React from "react";
import Input from "../Input";
import { StyledForm } from "./styled";


const PhotosForm = ({ onFormSubmit }) => {
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input alternativeStyle />
        </StyledForm>
    );
};

export default PhotosForm;
import React from "react";
import Input from "../Input";


const PhotosForm = ({ onFormSubmit }) => {
    return (
        <form onSubmit={onFormSubmit}>
            <Input />
        </form>
    );
};

export default PhotosForm;
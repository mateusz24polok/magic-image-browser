import React from "react";
import { DescriptionLine } from "./styled";

const Description = ({ firstLineDescription, secondLineDescription }) => (
    <>
        <DescriptionLine>{firstLineDescription}</DescriptionLine>
        <DescriptionLine>{secondLineDescription}</DescriptionLine>
    </>
);

export default Description;
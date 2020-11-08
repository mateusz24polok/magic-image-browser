import React from "react";
import { StyledGallery, Column, Wrapper } from "./styled";

const Gallery = ({ firstColumn, secondColumn, thirdColumn }) => {
    return (
        <Wrapper>
            <StyledGallery>
                <Column>
                    {firstColumn}
                </Column>
                <Column>
                    {secondColumn}
                </Column>
                <Column>
                    {thirdColumn}
                </Column>
            </StyledGallery>
        </Wrapper>
    );
};

export default Gallery;
import React from "react";
import { BackgroundWrapper, Wrapper } from "./styled";

const Main = ({ children }) => (
    <BackgroundWrapper>
        <Wrapper>
            {children}
        </Wrapper>
    </BackgroundWrapper>
);

export default Main;
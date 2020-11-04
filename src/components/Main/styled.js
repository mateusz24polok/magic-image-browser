import styled from "styled-components";

export const BackgroundWrapper = styled.div`
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-image: url(${({ theme }) => theme.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

export const Wrapper = styled.div`
    position: absolute;
    top:0;
    left:0;
    height:100%;
    width: 100%;
    background-color: ${({ theme }) => theme.imageFilter};
`;
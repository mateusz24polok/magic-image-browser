import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 0 auto;
`;

export const StyledGallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(100px,1fr));
    grid-gap: 20px;
`;

export const Column = styled.div`
    max-width: 400px;
`;
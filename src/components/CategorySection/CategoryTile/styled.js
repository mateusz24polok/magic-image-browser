import styled from "styled-components";

export const StyledTile = styled.p`
    margin: 0 10px;
    font-size: 10px;
    color: gray;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px 30px;
    margin-top: 10px;

    &::first-letter{
        text-transform: uppercase;
    }
`;
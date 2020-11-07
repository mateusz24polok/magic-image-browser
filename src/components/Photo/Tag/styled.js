import styled from "styled-components";

export const StyledTag = styled.div`
    background-color: ${({ theme }) => theme.colors.tag};
    color: ${({ theme }) => theme.colors.tagFont};
    padding: 5px;
    margin: 0 5px 0 0;
`;
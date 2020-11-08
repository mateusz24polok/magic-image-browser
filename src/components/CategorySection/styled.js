import styled from "styled-components";

export const CategoryWrapper = styled.section`
    margin: 5px auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;

    &:hover{
        overflow-x: scroll;
    }

    &::-webkit-scrollbar {
    margin-top: 5px;
    width: 12px;
    height: 6px;
    &:hover{
    }
}

    

    &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

    &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
`;
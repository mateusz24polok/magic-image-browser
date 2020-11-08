import styled, { css } from "styled-components";
import magnifierIcon from "../../assets/images/magnifierIcon.svg";
import ClearIcon from "../../assets/images/clearIcon.png";

export const StyledInput = styled.input`
    font-size: 20px;
    padding: 15px 5px 15px 40px;
    margin: 20px 0;
    width: 100%;
    background-image: url(${magnifierIcon});
    background-size: auto 30px;
    background-repeat: no-repeat;
    background-position: 5px center;
    border-radius: 5px;

    &::-webkit-search-cancel-button{
        -webkit-appearance: none;
        position: relative;
        right: 10px;
        background-image: url(${ClearIcon});
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: center;
        height: 20px;
        width: 20px;
        cursor: pointer;
    }

${({ alternativeStyle }) => alternativeStyle && css`
        font-size: 12px;
        padding: 5px 5px 5px 25px;
        margin: 20px 0 5px 0;
        width: 60%;
        background: linear-gradient(${({ theme }) => theme.colors.tag}, ${({ theme }) => theme.colors.tag}),url(${magnifierIcon});
        background-size: auto;
        background-repeat: no-repeat;
        background-position: auto;
        border-radius: 50px;
        border: 1px solid gray;

        &::-webkit-search-cancel-button{
        right: 5px;
        background-size: 10px 10px;
        height: 10px;
        width: 10px;
    }
    `}
`;
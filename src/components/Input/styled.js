import styled from "styled-components";
import magnifierIcon from "../../assets/images/magnifierIcon.svg";

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
`;
import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    background-color: rgba(10,10,10,0.7);
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-height: 80%;
    padding: 10px;
    background-color: white;
`;

export const Header = styled.header`
    display: flex;
`;

export const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
`;

export const ProfileNames = styled.div`
    margin-left: 5px;
`;

export const Name = styled.p`
    font-size: 10px;
    font-weight: 700;
    margin: 0;
`;

export const UserName = styled.p`
    font-size: 8px;
    color: gray;
    margin: 0;
`;

export const ProfileIcon = styled.img`
    border-radius: 50%;
    width: 32px;
    height: 32px;
`;

export const FunctionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    min-width: 30px;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 8px;
    margin-left: 10px;
    color: gray;
    font-weight: 700;
    cursor: pointer;
`;

export const ButtonIcon = styled.img`
    height: 15px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    margin: 20px auto;
`;

export const Image = styled.img`
    display: block;
    width: 800px;
    height: 400px;
    object-fit: scale-down;

    @media(max-width: 1000px){
        width: 600px;
        height: 300px;
    }

    @media(max-width: 800px){
        width: 400px;
        height: 200px;
    }

    @media(max-width: 600px){
        width: 250px;
        height: 150px;
    }
`;

export const Footer = styled.footer`
    display: flex;
`;

export const LocationInfo = styled.p`
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    margin: 0;
`;

export const CloseButton = styled.button`
    position: absolute;
    color: white;
    top: 3%;
    left: 3%;
    font-size: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

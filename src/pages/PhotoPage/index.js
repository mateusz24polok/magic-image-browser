import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:1000px;
    height: 500px;
    background-color: rgba(10,10,10,0.7);
`;

const PhotoPage = () => (
    <Wrapper/>
);

export default PhotoPage;
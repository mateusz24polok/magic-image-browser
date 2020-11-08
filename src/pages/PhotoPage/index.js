import React from "react";
import { useDispatch } from "react-redux";
import {
    ModalWrapper,
    Wrapper,
    CloseButton,
    Header,
    ProfileIcon,
    ProfileInfo,
    ProfileNames,
    Name,
    UserName,
    FunctionButton,
    ButtonIcon,
    ImageWrapper,
    Image,
    Footer,
    LocationInfo
} from "./styled";
import { resetPhoto } from "../../slices/photoSlice";
import HeartIcon from "../../assets/images/heartIcon.jpg";
import PlusIcon from "../../assets/images/plusIcon.png";
import ShareIcon from "../../assets/images/shareIcon.png";
import InfoIcon from "../../assets/images/infoIcon.png";
import LocationIcon from "../../assets/images/locationIcon.svg";

const PhotoPage = ({ photoURL, profileImage, profilName, profilUserName, photoLocation }) => {
    const dispatch = useDispatch();

    return (
        <ModalWrapper>
            <CloseButton onClick={() => { dispatch(resetPhoto()) }}>X</CloseButton>
            <Wrapper>
                <Header>
                    <ProfileInfo>
                        <ProfileIcon src={profileImage} alt={`${profilName} profile image`} />
                        <ProfileNames>
                            <Name>{profilName}</Name>
                            <UserName>{profilUserName}</UserName>
                        </ProfileNames>
                    </ProfileInfo>
                    <FunctionButton>
                        <ButtonIcon src={HeartIcon} />
                    </FunctionButton>
                    <FunctionButton>
                        <ButtonIcon src={PlusIcon} />
                    </FunctionButton>
                </Header>
                <ImageWrapper>
                    <Image src={photoURL} />
                </ImageWrapper>
                <Footer>
                    <LocationInfo>
                        <img src={LocationIcon} width={20} height={20} style={{ marginRight: "5px" }} />
                        <span>{photoLocation ? photoLocation : "Unknown place"}</span>
                    </LocationInfo>
                    <FunctionButton>
                        <ButtonIcon src={ShareIcon} />
                        <span style={{ marginLeft: "5px" }}>Share</span>
                    </FunctionButton>
                    <FunctionButton>
                        <ButtonIcon src={InfoIcon} />
                        <span style={{ marginLeft: "5px" }}>Info</span>
                    </FunctionButton>
                </Footer>
            </Wrapper>
        </ModalWrapper>
    );
};

export default PhotoPage;
import React from "react";
import { useDispatch } from "react-redux";
import { Wrapper, Image, Tags } from "./styled";
import Tag from "./Tag";
import { fetchPhoto } from "../../slices/photoSlice";

const Photo = ({ imageSrc, imageAlt, tags, id }) => {
    const dispatch = useDispatch();
    const firstLetterUppercasing = content => {
        return content[0].toUpperCase() + content.slice(1);
    }

    const getTagsContent = () => {
        if (tags !== null && tags !== undefined) {
            return (
                tags.map(tag => firstLetterUppercasing(tag.title))
            );
        } else {
            return ["", "", ""];
        }
    };

    return (
        <Wrapper>
            <Image onClick={() => dispatch(fetchPhoto(id))} src={imageSrc} alt={imageAlt} />
            <Tags>
                <Tag content={`${getTagsContent()[0] ? getTagsContent()[0] : ""} Images`} />
                <Tag content={`HD ${getTagsContent()[1] ? getTagsContent()[1] : ""} Wallpapers`} />
                {getTagsContent()[2] ? (<Tag content={getTagsContent()[2]} />) : null}
            </Tags>
        </Wrapper>
    );
};

export default Photo;
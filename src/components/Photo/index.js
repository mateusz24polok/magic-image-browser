import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Image, Tags } from "./styled";
import Tag from "./Tag";

const Photo = ({ imageSrc, imageAlt, tags, id }) => {
    const firstLetterUppercasing = content => {
        return content[0].toUpperCase() + content.slice(1);
    }

    const getTagsContent = () => {
        if (tags !== null && tags !== undefined) {
            return (
                tags.map(tag => firstLetterUppercasing(tag.title))
            );
        } else {
            return ["","",""];
        }
    };

    return (
        <Wrapper>
            <Link to={`/photos/${id}`}>
                <Image src={imageSrc} alt={imageAlt} />
            </Link>
            <Tags>
                <Tag content={`${getTagsContent()[0] ? getTagsContent()[0] : ""} Images`} />
                <Tag content={`HD ${getTagsContent()[1] ? getTagsContent()[1] : ""} Wallpapers`} />
                {getTagsContent()[2] ? (<Tag content={getTagsContent()[2]} />) : null}
            </Tags>
        </Wrapper>
    );
};

export default Photo;
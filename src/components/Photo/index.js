import React from "react";
import { Wrapper, Image, Tags } from "./styled";
import Tag from "./Tag";

const Photo = ({ imageSrc, imageAlt, tags }) => {
    const firstLetterUppercasing = content => {
        return content[0].toUpperCase() + content.slice(1);
    }
    
    const tagsContent = tags.map(tag => firstLetterUppercasing(tag.title));

    return (
        <Wrapper>
            <Image src={imageSrc} alt={imageAlt} />
            <Tags>
                <Tag content={`${tagsContent[0]} Images`} />
                <Tag content={`HD ${tagsContent[1]} Wallpapers`} />
                <Tag content={tagsContent[2]} />
            </Tags>
        </Wrapper>
    );
};

export default Photo;
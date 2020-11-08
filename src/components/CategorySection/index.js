import React from "react";
import CategoryTile from "./CategoryTile";
import { CategoryWrapper } from "./styled";

const CategorySection = ({ categories }) => (
    <CategoryWrapper>
        {categories.map(category => (
            <CategoryTile>{category}</CategoryTile>
        ))}
    </CategoryWrapper>
);

export default CategorySection;
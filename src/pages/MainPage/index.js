import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Main from "../../components/Main"
import Form from "../../components/Form";
import { selectQuery } from "../../slices/querySlice";

const MainPage = () => {
    const query = useSelector(selectQuery);
    const history = useHistory();
    const setUrlPhotoQuery = (query) => {
        history.push(`photos?query=${query}`);
    };

    console.log(history);

    return (
        <Main>
            <Form
                onFormSubmit={() => setUrlPhotoQuery(query)}
                title="Unsplash"
                firstLineDescription="The internet's source of freely-usable-images."
                secondLineDescription="Powered by creators everywhere"
            />
        </Main>
    )
};

export default MainPage;
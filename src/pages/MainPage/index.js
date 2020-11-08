import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Main from "../../components/Main"
import Form from "../../components/Form";
import { setQuery } from "../../slices/querySlice";
import { fetchSamplePhotos } from "../../slices/photosSlice";

const MainPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const setUrlPhotoQuery = (value) => {
        history.push(`photos?query=${value}`);
    };

    useEffect(() => {
        dispatch(fetchSamplePhotos());
    }, [dispatch]);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setUrlPhotoQuery(event.target.photoQuery.value)
        dispatch(setQuery(event.target.photoQuery.value));
    };

    return (
        <Main>
            <Form
                onFormSubmit={formSubmitHandler}
                title="Unsplash"
                firstLineDescription="The internet's source of freely-usable-images."
                secondLineDescription="Powered by creators everywhere"
            />
        </Main>
    )
};

export default MainPage;
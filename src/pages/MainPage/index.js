import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Main from "../../components/Main"
import Form from "../../components/Form";
import { selectQuery, setQuery } from "../../slices/querySlice";
import { fetchSamplePhotos } from "../../slices/photosSlice";

const MainPage = () => {
    const dispatch = useDispatch();
    const query = useSelector(selectQuery);
    const history = useHistory();
    const setUrlPhotoQuery = (value) => {
        history.push(`photos?query=${value}`);
    };

    useEffect(() => {
        dispatch(fetchSamplePhotos());
    },[dispatch])

    return (
        <Main>
            <Form
                onFormSubmit={(event) => {
                    event.preventDefault();
                    setUrlPhotoQuery(event.target.photoQuery.value)
                    dispatch(setQuery(event.target.photoQuery.value));
                }}
                title="Unsplash"
                firstLineDescription="The internet's source of freely-usable-images."
                secondLineDescription="Powered by creators everywhere"
            />
        </Main>
    )
};

export default MainPage;
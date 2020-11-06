import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPhotos } from "../../slices/photosSlice";

const PhotosPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchPhotos());
    }, [dispatch, location.pathname])
    return (
        <div>Photos division</div>
    );
};

export default PhotosPage;
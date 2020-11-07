import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, selectPhotos } from "../../slices/photosSlice";
import PhotosForm from "../../components/PhotosForm";
import Photo from "../../components/Photo";

const PhotosPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const photos = useSelector(selectPhotos);

    useEffect(() => {
        dispatch(fetchPhotos());
    }, [dispatch, location.pathname])

    return (
        <>
            <PhotosForm />
            <h1>Title</h1>
            <section>Helpersy</section>
            {photos &&
                <Photo
                    tags={photos.results[0].tags}
                    imageSrc={photos.results[0].urls.regular}
                    imageAlt={photos.results[0].alt_description}
                />
            }
        </>
    );
};

export default PhotosPage;
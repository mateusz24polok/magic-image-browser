import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, selectPhotos, increasePage, selectSamplePhotos} from "../../slices/photosSlice";
import PhotosForm from "../../components/PhotosForm";
import Photo from "../../components/Photo";
import Gallery from "../../components/Gallery";
import { selectQuery, setQuery } from "../../slices/querySlice";

const PhotosPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const query = useSelector(selectQuery);
    const location = useLocation();
    const photos = useSelector(selectPhotos);
    const samplePhotos = useSelector(selectSamplePhotos);
    const [flague, setFlague] = useState(false);
    const urlQuery = new URLSearchParams(location.search).get("query");


    const setUrlPhotoQuery = (value) => {
        history.push(`photos?query=${value}`);
    };

    const getScrollPercent = () => {
        const h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    }
    useEffect(() => {
        dispatch(fetchPhotos());
    }, [query])

    useEffect(() => {
        dispatch(setQuery(urlQuery))
    }, [dispatch, location.pathname])

    useEffect(() => {
        window.addEventListener("scroll", event => {
            console.log(getScrollPercent());
            if (getScrollPercent() >= 90) {
                setFlague(true);
            } else if (getScrollPercent() < 90) {
                setFlague(false);
            }
        }
        );
    })

    useEffect(() => {
        if (flague) {
            dispatch(increasePage());
        }
    }, [dispatch, flague])

    console.log(photos);


    const firstColumnPhotos = [];
    const secondColumnPhotos = [];
    const thirdColumnPhotos = [];

    if (photos) {
        for (let i = 0; i <= photos.length - 1; i += 3) {
            firstColumnPhotos.push(photos[i]);
        }

        for (let i = 1; i <= photos.length - 1; i += 3) {
            secondColumnPhotos.push(photos[i]);
        }

        for (let i = 2; i <= photos.length - 1; i += 3) {
            thirdColumnPhotos.push(photos[i]);
        }
    }

    const firstColumnSamplePhotos = [];
    const secondColumnSamplePhotos = [];
    const thirdColumnSamplePhotos = [];

    if (samplePhotos) {
        for (let i = 0; i <= samplePhotos.length - 1; i += 3) {
            firstColumnSamplePhotos.push(samplePhotos[i]);
        }

        for (let i = 1; i <= samplePhotos.length - 1; i += 3) {
            secondColumnSamplePhotos.push(samplePhotos[i]);
        }

        for (let i = 2; i <= samplePhotos.length - 1; i += 3) {
            thirdColumnSamplePhotos.push(samplePhotos[i]);
        }
    }



    return (
        <>
            <PhotosForm onFormSubmit={(event) => {
                event.preventDefault();
                setUrlPhotoQuery(event.target.photoQuery.value)
                dispatch(setQuery(event.target.photoQuery.value));
            }} />
            <h1>Title</h1>
            <section>Helpersy</section>
            {photos.length ?
                <Gallery
                    firstColumn={
                        firstColumnPhotos.map(photo => (
                            <Photo
                                tags={photo.tags}
                                imageSrc={photo.urls.small}
                                imageAlt={photo.alt_description}
                                id={photo.id}
                            />
                        ))
                    }
                    secondColumn={
                        secondColumnPhotos.map(photo => (
                            <Photo
                                tags={photo.tags}
                                imageSrc={photo.urls.small}
                                imageAlt={photo.alt_description}
                                id={photo.id}
                            />
                        ))
                    }
                    thirdColumn={
                        thirdColumnPhotos.map(photo => (
                            <Photo
                                tags={photo.tags}
                                imageSrc={photo.urls.small}
                                imageAlt={photo.alt_description}
                                id={photo.id}
                            />
                        ))
                    }
                />
                : <Gallery
                    firstColumn={
                        firstColumnSamplePhotos.map(photo => (
                            <Photo
                                imageSrc={photo.urls.small}
                                imageAlt={photo.alt_description}
                                id={photo.id}
                            />
                        ))
                    }
                    secondColumn={
                        secondColumnSamplePhotos.map(photo => (
                            <Photo
                                imageSrc={photo.urls.small}
                                imageAlt={photo.alt_description}
                                id={photo.id}
                            />
                        ))
                    }
                    thirdColumn={
                        thirdColumnSamplePhotos.map(photo => (
                            <Photo
                                imageSrc={photo.urls.small}
                                imageAlt={photo.alt_description}
                                id={photo.id}
                            />
                        ))
                    }
                />}
        </>
    );
};

export default PhotosPage;
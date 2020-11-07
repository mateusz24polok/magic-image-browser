const accessKey = "_s92WTfZxaw_8fKRnQ8fXz-nnz4nMnkP_OGilIe6R5c";

const getSamplePhotosURL = () => `https://api.unsplash.com/photos/?client_id=${accessKey}`;

const getSearchedPhotosURL = (query) => `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

export const getSearchedPhotos = async (query) => {
    try {
        const url = getSearchedPhotosURL(query);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const photosJSON = response.json();
        return photosJSON;
    } catch (error) {
        console.error(error);
    }
};
// const accessKey = "uVQGvu2MXLEcynCgeXwN8UigQ1DKzbX0wihtBU09zMM";
const accessKey = "_s92WTfZxaw_8fKRnQ8fXz-nnz4nMnkP_OGilIe6R5c"; 
const getSamplePhotosURL = () => `https://api.unsplash.com/photos/?client_id=${accessKey}`;

const getSearchedPhotosURL = (query, page) => `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=30&client_id=${accessKey}`;

export const getSearchedPhotos = async (query, page = 1) => {
    try {
        const url = getSearchedPhotosURL(query, page);
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

export const getSamplePhotos = async () => {
    try {
        const response = await fetch(getSamplePhotosURL());
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const photosJSON = response.json();
        return photosJSON;
    } catch (error) {
        console.error(error);
    }
};
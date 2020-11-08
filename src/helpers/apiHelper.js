const accessKey = "uVQGvu2MXLEcynCgeXwN8UigQ1DKzbX0wihtBU09zMM";
// const accessKey = "_s92WTfZxaw_8fKRnQ8fXz-nnz4nMnkP_OGilIe6R5c"; - Second APIKey
const getSamplePhotosURL = () => `https://api.unsplash.com/photos/?client_id=${accessKey}`;
const getSearchedPhotosURL = (query, page) => `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=30&client_id=${accessKey}`;
const getPhotoByIdURL = id => `https://api.unsplash.com/photos/${id}?client_id=${accessKey}`;
const getSearchedCollectionsURL = query => `https://api.unsplash.com/search/collections?client_id=${accessKey}&query=${query}`;

export const getPhotoById = async (id) => {
    try {
        const url = getPhotoByIdURL(id);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const photoJSON = await response.json();
        return photoJSON;
    } catch (error) {
        console.error(error);
    }
};


export const getSearchedPhotos = async (query, page = 1) => {
    try {
        const url = getSearchedPhotosURL(query, page);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const photosJSON = await response.json();
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
        const photosJSON = await response.json();
        return photosJSON;
    } catch (error) {
        console.error(error);
    }
};

export const getSearchedCollections = async (query) => {
    try {
        const response = await fetch(getSearchedCollectionsURL(query));
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const collectionsJSON = await response.json();
        const firstCollectionTags = collectionsJSON.results[0].tags.map(tag => tag.title);
        const secondCollectionTags = collectionsJSON.results[1].tags.map(tag => tag.title);
        const thirdCollectionTags = collectionsJSON.results[2].tags.map(tag => tag.title);
        const collectionTag = new Set([...firstCollectionTags, ...secondCollectionTags, ...thirdCollectionTags]);
        return collectionTag;
    } catch (error) {
        console.error(error);
    }
};
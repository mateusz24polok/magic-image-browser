import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
    name: "photos",
    initialState: {
        error: false,
        loading: false,
        photos: null
    },
    reducers: {
        fetchPhotos: state => {
            console.log("Starting to fetch photos")
        },
    },
});

const selectPhotosState = state => state.photos;
export const selectPhotos = state => selectPhotosState(state).photos;
export const selectPhotosError = state => selectPhotosState(state).error;
export const selectPhotosLoading = state => selectPhotosState(state).loading;

export const { fetchPhotos } = photosSlice.actions;
export default photosSlice.reducer;
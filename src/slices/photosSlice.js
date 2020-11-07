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
            state.loading = true;
        },

        fetchPhotosSuccess: (state, { payload: searchedPhotos }) => {
            state.loading = false;
            state.error = false;
            state.photos = searchedPhotos;
        },

        fetchPhotosError: state => {
            state.loading = false;
            state.error = true;
        },
    },
});

const selectPhotosState = state => state.photos;
export const selectPhotos = state => selectPhotosState(state).photos;
export const selectPhotosError = state => selectPhotosState(state).error;
export const selectPhotosLoading = state => selectPhotosState(state).loading;

export const { fetchPhotos, fetchPhotosSuccess, fetchPhotosError } = photosSlice.actions;
export default photosSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
    name: "photos",
    initialState: {
        error: false,
        loading: false,
        page: 1,
        photos: [],
        samplePhotos: [],
    },
    reducers: {
        fetchPhotos: state => {
            state.loading = true;
        },

        fetchSamplePhotos: state => {
            state.loading = true;
        },

        fetchSamplePhotosSuccess: (state, { payload: samplePhotos }) => {
            state.loading = false;
            state.error = false;
            state.samplePhotos = samplePhotos;
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

        increasePage: state => {
            state.page++;
        },

        fetchNewPhotos: (state, { payload: newPhotos }) => {
            state.photos.push(...newPhotos);
        },
    },
});

const selectPhotosState = state => state.photos;
export const selectPhotos = state => selectPhotosState(state).photos;
export const selectSamplePhotos = state => selectPhotosState(state).samplePhotos;
export const selectPhotosError = state => selectPhotosState(state).error;
export const selectPhotosLoading = state => selectPhotosState(state).loading;
export const selectPhotosPage = state => selectPhotosState(state).page;

export const { fetchPhotos, fetchPhotosSuccess, fetchPhotosError, increasePage, fetchNewPhotos, fetchSamplePhotos, fetchSamplePhotosSuccess } = photosSlice.actions;
export default photosSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
    name: "photo",
    initialState: {
        error: false,
        loading: false,
        photo: null
    },
    reducers: {
        fetchPhoto: state => {
            state.loading = true;
        },

        fetchPhotoSuccess: (state, { payload: photo }) => {
            state.loading = false;
            state.error = false;
            state.photo = photo;
        },

        fetchPhotoError: state => {
            state.loading = false;
            state.error = true;
        },

        resetPhoto: state => {
            state.photo = null;
        }
    },
});

const selectPhotoState = state => state.photo;
export const selectPhoto = state => selectPhotoState(state).photo;
export const selectPhotoError = state => selectPhotoState(state).error;
export const selectPhotoLoading = state => selectPhotoState(state).loading;

export const { fetchPhoto, fetchPhotoError, fetchPhotoSuccess, resetPhoto } = photoSlice.actions;
export default photoSlice.reducer;
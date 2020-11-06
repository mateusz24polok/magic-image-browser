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
            console.log("Starting to fetch photo")
        },
    },
});

const selectPhotoState = state => state.photo;
export const selectPhoto = state => selectPhotoState(state).photo;
export const selectPhotoError = state => selectPhotoState(state).error;
export const selectPhotoLoading = state => selectPhotoState(state).loading;

export const { fetchPhoto } = photoSlice.actions;
export default photoSlice.reducer;
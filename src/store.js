import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "./slices/photoSlice";
import photosSlice from "./slices/photosSlice";
import querySlice from "./slices/querySlice";

export const store = configureStore({
    reducer: {
        query: querySlice,
        photo: photoSlice,
        photos: photosSlice,
    },
    middleware: [],
});
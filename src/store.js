import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import photoSlice from "./slices/photoSlice";
import photosSlice from "./slices/photosSlice";
import querySlice from "./slices/querySlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        query: querySlice,
        photo: photoSlice,
        photos: photosSlice,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
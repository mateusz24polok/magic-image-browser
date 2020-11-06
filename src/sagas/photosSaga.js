import { takeLatest } from "redux-saga/effects";
import { fetchPhotos } from "../slices/photosSlice";

function* fetchPhotosHandler() {
    yield console.log("Jesteś w sadze Photos");
};

export function* photosSaga() {
    yield takeLatest(fetchPhotos.type, fetchPhotosHandler)
};
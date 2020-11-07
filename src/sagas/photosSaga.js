import { takeLatest, call, select, put } from "redux-saga/effects";
import { fetchPhotos, fetchPhotosSuccess, fetchPhotosError } from "../slices/photosSlice";
import { getSearchedPhotos } from "../helpers/apiHelper";
import { selectQuery } from "../slices/querySlice";

function* fetchPhotosHandler() {
    try {
        yield console.log("Jesteś w sadze Photos");
        const query = yield select(selectQuery);
        const searchedPhotos = yield call(getSearchedPhotos, query);
        yield put(fetchPhotosSuccess(searchedPhotos))
    } catch (error) {
        yield put(fetchPhotosError());
        console.error(error);
    }

};

export function* photosSaga() {
    yield takeLatest(fetchPhotos.type, fetchPhotosHandler)
};
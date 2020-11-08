import { takeLatest, call, select, put } from "redux-saga/effects";
import {
    fetchPhotos,
    fetchPhotosSuccess,
    fetchPhotosError,
    fetchNewPhotos,
    increasePage,
    selectPhotosPage,
    fetchSamplePhotos,
    fetchSamplePhotosSuccess
} from "../slices/photosSlice";
import { getSearchedPhotos, getSamplePhotos, getSearchedCollections } from "../helpers/apiHelper";
import { selectQuery } from "../slices/querySlice";

function* fetchPhotosHandler() {
    try {
        yield console.log("Jesteś w sadze Photos");
        const query = yield select(selectQuery);
        const collection = yield call(getSearchedCollections, query);
        yield console.log(collection);
        const searchedPhotos = yield call(getSearchedPhotos, query);
        yield put(fetchPhotosSuccess({ searchedPhotos: searchedPhotos.results, searchedPhotosCategories: Array.from(collection) }))
    } catch (error) {
        yield put(fetchPhotosError());
        console.error(error);
    }

};

function* fetchNewPhotosHandler() {
    try {
        const page = yield select(selectPhotosPage);
        const query = yield select(selectQuery);
        const newPhotos = yield call(getSearchedPhotos, query, page);
        yield put(fetchNewPhotos(newPhotos.results));
    } catch (error) {
        console.error(error);
    }
}

function* fetchSamplePhotosHandler() {
    try {
        const samplePhotos = yield call(getSamplePhotos);
        yield put(fetchSamplePhotosSuccess(samplePhotos))
    } catch (error) {
        yield put(fetchPhotosError());
        console.error(error);
    }

};

export function* photosSaga() {
    yield takeLatest(fetchPhotos.type, fetchPhotosHandler)
    yield takeLatest(increasePage.type, fetchNewPhotosHandler)
    yield takeLatest(fetchSamplePhotos.type, fetchSamplePhotosHandler);
};
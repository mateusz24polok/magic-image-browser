import { takeLatest, call, put } from "redux-saga/effects";
import { getPhotoById } from "../helpers/apiHelper";
import { fetchPhoto, fetchPhotoSuccess, fetchPhotoError } from "../slices/photoSlice";

function* fetchPhotoHandler({ payload }) {
    try {
        const id = yield payload;
        const photo = yield call(getPhotoById, id);
        yield put(fetchPhotoSuccess(photo))
    } catch (error) {
        yield put(fetchPhotoError());
        console.error(error);
    }

};

export function* photoSaga() {
    yield takeLatest(fetchPhoto.type, fetchPhotoHandler);
};
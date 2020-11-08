import { all } from "redux-saga/effects";
import { photosSaga } from "./photosSaga";
import { photoSaga } from "./photoSaga";

function* rootSaga() {
    yield all([photosSaga(), photoSaga()]);
};

export default rootSaga;
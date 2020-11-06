import { all } from "redux-saga/effects";
import { photosSaga } from "./photosSaga";

function* rootSaga() {
    yield all([photosSaga()]);
};

export default rootSaga;
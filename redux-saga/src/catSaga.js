import { call, put, takeEvery } from "redux-saga/effects";
import { catActions } from "./catState";

function* workGetCatsFetch() {
  const cats = yield call(() => {
    return fetch("https://api.thecatapi.com/v1/breeds");
  });
  const catsArray = yield cats.json();
  const response = catsArray.slice(0, 10);
  yield put(catActions.getCatsSuccess(response));
}

function* catSaga() {
//   yield takeEvery("cat/getCatsFetch", workGetCatsFetch);
  yield takeEvery(catActions.getCatsFetch, workGetCatsFetch);
}

export default catSaga;
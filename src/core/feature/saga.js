import { takeEvery } from 'redux-saga/effects';


const sagaWorker = function* ({ payload }) {
  yield 1;
}

export const saga = function* () {
  yield takeEvery(ACTION, sagaWorker);
}

import { put, takeEvery } from 'redux-saga/effects';
import { SAGA_ACTION } from './actions';


// NOTE: Example of a saga worker, an ES6 generator that get executed
// once redux-saga receives the below condition.
export function* sagaWorker ({ payload }) {
  yield payload;
  yield put({ payload });
}

export const saga = function* () {
  // NOTE: Use other effects like take, takeLatest, debounce, etc. for proper needs.
  // Besides listening to an action type, redux-saga can also listen to various patterns and channels.
  // For more effects and event handlers, visit redux-saga's
  // [Effects](https://redux-saga.js.org/docs/basics/DeclarativeEffects.html)
  // and [API Doc](https://redux-saga.js.org/docs/api/).
  yield takeEvery(SAGA_ACTION, sagaWorker);
};

import { takeEvery } from 'redux-saga/effects';
import { SAGA_ACTION } from './actions';


// NOTE: an example of a saga worker, an ES6 generator that get executed
// once redux-saga receives the below condition.
// Saga workers **control asynchronous data flow** of the application.
export function* sagaWorker ({ payload }) {
  yield payload;
}

export const saga = function* () {
  // NOTE: Use other effects like take, takeLatest, debounce, etc. for proper needs.
  // Besides listening to an action type, redux-saga can also listen to various pattern.
  // For more effects and listening patterns, visit redux-saga [API doc](redux-saga).
  // TODO: link to redux-saga API doc
  yield takeEvery(SAGA_ACTION, sagaWorker);
};

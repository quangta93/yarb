import { all, fork } from 'redux-saga/effects';
import { saga as featureSaga } from 'core/feature';


// NOTE: Root saga pattern: https://redux-saga.js.org/docs/advanced/RootSaga.html
export const sagas = function* () {
  yield all([
    fork(featureSaga),
  ]);
}

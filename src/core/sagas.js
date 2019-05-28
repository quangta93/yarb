import { all, fork } from 'redux-saga/effects';
import { saga as featureSaga } from 'core/feature';


export const sagas = function* () {
  yield all([
    fork(featureSaga),
  ]);
}

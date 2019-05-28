import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { sagaWorker } from './saga';


test('sagaWorker() yields payload', () => {
  const payload = 'some strings';
  testSaga(sagaWorker, { payload }).next().is(payload);
});

test('sagaWorker() put payload', () => {
  const payload = 'some strings';

  return expectSaga(sagaWorker, { payload })
    .put({ payload })
    .run();
});

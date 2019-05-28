import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { sagaWorker } from './saga';


test('sagaWorker() yields payload first', () => {
  const payload = 'some strings';
  const saga = testSaga(sagaWorker, { payload });

  saga.next().is(payload);
});

test('sagaWorker() put payload', () => {
  const payload = 'some strings';

  return expectSaga(sagaWorker, { payload })
    .put({ payload })
    .run();
});

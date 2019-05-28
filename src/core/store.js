import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducers } from './reducers';
import { sagas } from './sagas';


export const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(sagas);

  return store;
};

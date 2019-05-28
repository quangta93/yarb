import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers';
import { sagas } from './sagas';


export const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  let middlewares = applyMiddleware(sagaMiddleware);
  const devToolEnabled = (process.env.NODE_ENV === 'development');

  if (devToolEnabled) {
    // NOTE: For more options, visit https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#windowdevtoolsextensionconfig
    const enhancer = composeWithDevTools({});
    middlewares = enhancer(middlewares);
  }

  const store = createStore(reducers, middlewares);

  sagaMiddleware.run(sagas);

  return store;
};

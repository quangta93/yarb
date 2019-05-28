import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { createRootReducer } from './reducers';
import { sagas } from './sagas';


export const createCustomStore = () => {
  const history = createBrowserHistory();
  const sagaMiddleware = createSagaMiddleware();

  let rootMiddleware = compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    )
  );

  const devToolEnabled = (process.env.NODE_ENV === 'development');

  if (devToolEnabled) {
    // NOTE: For more options, visit https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
    const enhancer = composeWithDevTools({});
    rootMiddleware = enhancer(rootMiddleware);
  }

  const rootReducer = createRootReducer(history);
  const store = createStore(rootReducer, rootMiddleware);

  sagaMiddleware.run(sagas);

  return {
    store,
    history,
  };
};

import { handleActions } from 'redux-actions';
import { STORE_ACTION } from './actions';


export const initialState = null;

const reducerMap = {
  // NOTE: redux-actions default action reducer to indentity function.
  // Fore more info, visit [API doc](https://redux-actions.js.org/api)
  [STORE_ACTION]: undefined,
};

// FIXME
export const reducer = handleActions(reducerMap, initialState);

import { handleActions } from 'redux-actions';
import { STORE_ACTION } from './actions';

const initialState = {};

const reducerMap = {
  // NOTE: Setting handler to null means returning the exact state.
  // For more built-in handlers, visit redux-actions [API doc](redux-actions)
  // TODO: link to redux-actions API doc
  [STORE_ACTION]: null,
};

export const reducer = handleActions(reducerMap, initialState);

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as featureReducer } from 'core/feature';


export const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  feature: featureReducer,
});

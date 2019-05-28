import { createAction } from 'redux-actions';


const FEATURE = '[Feature]'; // Feature name, used to namespacing redux actions.

export const STORE_ACTION = `${FEATURE} STORE_ACTION`;
export const actForStore = createAction(STORE_ACTION);

export const SAGA_ACTION = `${FEATURE} SAGA_ACTION`;
export const actForSaga = createAction(SAGA_ACTION);

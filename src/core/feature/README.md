# src/core/feature

## Actions
Alternatively, we could use `createActions` to create multiple actions simutaneously.
```
import { createActions } from 'redux-actions';


const FEATURE = '[Feature]'; // Feature name, used to namespacing redux actions.

export const SAGA_ACTION = `${FEATURE} SAGA_ACTION`;
export const STORE_ACTION = `${FEATURE} STORE_ACTION`;

const {
  sagaAction: actForSaga
  storeAction: actForStore,
} = createActions(
  {
    SAGA_ACTION: null,
    STORE_ACTION: null,
  },
  {
    prefix: FEATURE,
    namespace: ' ',
  }
);

export {
  actForSaga,
  actForStore,
}
```
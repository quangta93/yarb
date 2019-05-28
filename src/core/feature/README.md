# src/core/feature

## Actions
Alternatively, we could use `createActions` to create multiple actions simutaneously.
```
import { createActions } from 'redux-actions';


const FEATURE = '[Feature]'; // Feature name, used to namespacing redux actions.

export const SAGA_ACTION = `${FEATURE} SAGA_ACTION`;
export const STORE_ACTION = `${FEATURE} STORE_ACTION`;

const {
  sagaAction: actForSaga,
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

## Sagas
### Architecture
- Saga workers **control asynchronous data flow** of the application. These flows include:
  - API request and response handling.
  - Coordination of multiple asynchronous processes.
  - etc.

### Testing
- Use `expectSaga` for *declarative testing*, `testSaga` for *sequential testing*.
- Return a single `expectSaga/testSaga` for each test.
  - `expectSaga/testSaga` must be returned in order for its result to be recognized.
  - Including multiple `expectSaga/testSaga` on the same test ignores every test, except the returned one.

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
- Limit the usage of `testSaga`
  - A slight restructuring of a saga can lead to test failure.
  - **Testing that the code does what it should do, not what it is doing.**
- Always return `expectSaga` or use `async/await`
  - `expectSaga` returns a Promise. Without returning a promise, `jest` will complete before the promise resolves.
- In addition, use `redux-saga-test-plan`'s effects like `provide`, `useReducer`, and `useState` for integration testing.

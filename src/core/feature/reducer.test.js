import { reducer, initialState } from './reducer';
import { actForStore } from './actions';


test('reducer initializes to initialState', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

// NOTE: This test tests behavior of this particular reducer.
// Needs modifications if reducer function changes.
test('reducer returns state regardless of the payload', () => {
  let action = actForStore();
  expect(reducer(initialState, action)).toEqual(initialState);

  action = actForStore('string');
  expect(reducer(initialState, action)).toEqual(initialState);

  action = actForStore(Math.floor(Math.random() * 10000));
  expect(reducer(initialState, action)).toEqual(initialState);
});

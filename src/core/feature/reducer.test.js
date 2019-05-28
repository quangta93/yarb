import { reducer, initialState } from './reducer';


test('reducer initializes to initialState', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

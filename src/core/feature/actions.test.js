import {
  STORE_ACTION,
  SAGA_ACTION,
  actForStore,
  actForSaga,
} from './actions';

// Individual aciton tests
test('actForStore() creates an action of type STORE_ACTION', () => {
  expect(actForStore()).toMatchObject({
    type: STORE_ACTION,
  });
});

test('actForStore() creates an action with given payload', () => {
  let payload = {};

  expect(actForStore(payload)).toEqual({
    payload,
    type: STORE_ACTION,
  });

  payload = Math.floor(Math.random() * 100);

  expect(actForStore(payload)).toEqual({
    payload,
    type: STORE_ACTION,
  });
});

describe('generic action creator test', () => {
  const actionSetups = [
    {
      name: 'actForStore',
      func: actForStore,
      actionType: STORE_ACTION,
    },
    {
      name: 'actForSaga',
      func: actForSaga,
      actionType: SAGA_ACTION,
    },
  ];

  actionSetups.forEach(
    ({ name, func, actionType }) => {
      test(`${name}() creates an action of type ${actionType}`, () => {
        expect(func()).toMatchObject({
          type: actionType,
        });
      });

      test(`${name}() creates an action with given payload`, () => {
        let payload = {};

        expect(func(payload)).toEqual({
          payload,
          type: actionType,
        });

        payload = Math.floor(Math.random() * 100);

        expect(func(payload)).toEqual({
          payload,
          type: actionType,
        });
      });
    }
  );
});

import React from 'react';
import { Provider } from 'react-redux';
import { getStore } from 'core/store';
import { App } from 'components/App';

export const Root = () => (
  <Provider store={getStore()}>
    <App />
  </Provider>
);

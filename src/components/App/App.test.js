import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { App } from './App';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders "Learn React" link', () => {
  const { getByText } = render(<App />);
  expect(getByText('Learn React')).toBeInTheDocument();
});

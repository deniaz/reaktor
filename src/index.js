import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './store';

const App = () => (
  <Provider store={store}>
    <div>Hello Reaktor</div>
  </Provider>
);

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('react-app'));

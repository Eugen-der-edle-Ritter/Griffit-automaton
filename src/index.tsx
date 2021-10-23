import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './automaton/automaton';
import { Provider } from 'react-redux';

import '../public/style.css';

import { App } from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

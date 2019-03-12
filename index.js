import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import Routes from './src/routes';
import { BrowserRouter as Router } from 'react-router-dom';

// Create Redux store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/app';
import store from './store';
import './styles.css';

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();


// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reducers from './reducers';
import thunk from 'redux-thunk';
import now from './middlewares/now';
import log from './middlewares/log';
import { epicMiddleware, runEpics } from './epics/middleware';
const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk, /* now, log,*/ epicMiddleware))
);
runEpics();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

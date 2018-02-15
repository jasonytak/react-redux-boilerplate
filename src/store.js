import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Enable Redux devtools, assigning default value

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware()),
);

// Compose - return values will be provided as arguments to functions to the left

export default store;

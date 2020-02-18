import {createLogger} from 'redux-logger';
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, logger];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;

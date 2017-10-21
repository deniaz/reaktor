import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from './reducers';

// eslint-disable-next-line no-underscore-dangle,no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk)));

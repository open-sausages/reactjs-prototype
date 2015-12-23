import { di, getCombinedInitialState } from 'di';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import createRootReducer from '../reducers/createRootReducer.js';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);

export default function (initialState) {
    return createStoreWithMiddleware(createRootReducer(), getCombinedInitialState(initialState));
};

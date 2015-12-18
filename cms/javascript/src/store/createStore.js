import { di } from 'di';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import objectAssignDeep from 'object-assign-deep';
import createRootReducer from '../reducers/createRootReducer.js';

/**
 * Merges dependency injected state with the initial CMS app's initial state.
 *
 * @param object initialState - CMS application initial state object.
 * @return object
 */
function getCombinedInitialState(initialState) {
    var combinedInitialState = Object.assign({}, initialState);

    for (let key in di.container) {
        if (key.match(/_initialState$/) !== null) {
            combinedInitialState = objectAssignDeep(combinedInitialState, di.container[key]);
        }
    }

    return combinedInitialState;
}

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);

export default function (initialState) {
    return createStoreWithMiddleware(createRootReducer(), getCombinedInitialState(initialState));
};

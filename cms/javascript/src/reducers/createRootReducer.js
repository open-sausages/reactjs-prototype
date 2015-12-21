import { di } from 'di';
import { combineReducers } from 'redux';

export default function createRootReducer() {
    // Get reducers from DI so we get any extended behaviour.
    const pageReducer = di.container.pageReducer;

    const rootReducer = combineReducers({
        page: pageReducer // The reducer key matches a key in the store.
    });

    return rootReducer;
};

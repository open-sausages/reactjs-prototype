import { di } from 'di';
import { combineReducers } from 'redux';

export default function createRootReducer() {
    const friendsReducer = di.container.friendsReducer; // Get from DI so we get any extended behaviour.
    const rootReducer = combineReducers({
        friends: friendsReducer // The reducer key matches a key in the store.
    });

    return rootReducer;
};

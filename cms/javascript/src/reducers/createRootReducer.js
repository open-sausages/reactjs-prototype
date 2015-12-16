import di from 'di';
import { combineReducers } from 'redux';

export default function createRootReducer() {
    const friendsListReducer = di.container.FriendsListReducer; // Get from DI so we get any extended behaviour.
    const rootReducer = combineReducers({
        friends: friendsListReducer // The reducer key matches a key in the store.
    });

    return rootReducer;
};

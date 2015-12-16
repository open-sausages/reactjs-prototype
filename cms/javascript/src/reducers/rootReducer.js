import di from 'di';
import { combineReducers } from 'redux';

const friendsListReducer = di.container.FriendsListReducer; // Get from DI so we get any extended behaviour.

const rootReducer = combineReducers({
    friends: friendsListReducer // The reducer key matches a key in the store.
});

export default rootReducer;

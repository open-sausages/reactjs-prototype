import { combineReducers } from 'redux';
import friendsListReducer from 'friendsListReducer'; // Comes from common

const rootReducer = combineReducers({
    friends: friendsListReducer // The reducer key matches a key in the store.
});

export default rootReducer;

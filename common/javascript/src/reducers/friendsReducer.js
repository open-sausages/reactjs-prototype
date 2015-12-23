import { FRIENDS } from '../constants/actionTypes';

function friendsReducer(state = {}, action) {
    switch (action.type) {
        case FRIENDS.GET_FRIENDS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FRIENDS.GET_FRIENDS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                error: null,
                friends: action.friends,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default friendsReducer;

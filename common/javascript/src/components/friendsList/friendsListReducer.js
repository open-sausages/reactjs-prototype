import * as actionTypes from './friendsListConstants';

function friends(state = {}, action) {
    switch (action.type) {
        case actionTypes.GET_FRIENDS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case actionTypes.GET_FRIENDS_SUCCESS:
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

export default friends;

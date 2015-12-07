import * as actionTypes from './friendsListConstants';

const initialState = {
    isFetching: false,
    friends: []
};

function friends(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_FRIENDS:
            return Object.assign({}, state, {
                isFetching: true
            });
            break;
        case actionTypes.GET_FRIENDS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                error: null,
                friends: action.friends,
                lastUpdated: action.receivedAt
            });
            break;
        default:
            return state
    }
}

export default friends;

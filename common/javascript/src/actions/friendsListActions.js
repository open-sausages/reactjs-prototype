import fetch from 'isomorphic-fetch';
import { FRIENDS } from '../constants/actionTypes';

/**
 * Does the AJAX request and dispatches the before and after actions.
 */
function fetchFriends() {
    return (dispatch) => {
        dispatch({
            type: FRIENDS.GET_FRIENDS
        });

        return fetch('/cms/data/friends.json', { credentials: 'same-origin' })
            .then(response => response.json())
            .then(json => dispatch({
                type: FRIENDS.GET_FRIENDS_SUCCESS,
                friends: json.friends,
                receivedAt: Date.now()
            }));
    };
}

/**
 * Makes sure there's not already a request in progress.
 */
function shouldFetchFriends(state) {
    return state.friends.isFetching === false;
}

/**
 * The function to call when you want to fetch your friends.
 */
export function fetchFriendsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchFriends(getState())) {
            return dispatch(fetchFriends());
        }
    };
}

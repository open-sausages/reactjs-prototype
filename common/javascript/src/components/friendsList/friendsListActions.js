import fetch from 'isomorphic-fetch';
import * as actionTypes from './friendsListConstants';

/**
 * Dispatched before the AJAX request happens.
 */
function getFriends() {
    return {
        type: actionTypes.GET_FRIENDS
    };
}

/**
 * Dispatch when the results come back. Similar to a success callback.
 */
function getFriendsSuccess(json) {
    return {
        type: actionTypes.GET_FRIENDS_SUCCESS,
        friends: json.friends,
        receivedAt: Date.now()
    };
}

/**
 * Does the AJAX request and dispatches the before and after actions.
 */
function fetchFriends() {
    return (dispatch) => {
        dispatch(getFriends());

        return fetch('/cms/data/friends.json', { credentials: 'same-origin' })
            .then(response => response.json())
            .then(json => dispatch(getFriendsSuccess(json)));
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

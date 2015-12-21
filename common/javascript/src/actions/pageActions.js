/**
 * Actions for updating the `page` state key.
 */

import { PAGE } from '../constants/actionTypes';

/**
 * Fetches a list of form fields for a page.
 *
 * @param number id - The page id
 * @return function
 */
export function fetchFormFields(id) {
    return (dispatch, getState) => {
        const state = getState();

        // If a fetch is already happening, do nothing.
        if (state.page.isFetching) {
            return;
        }

        // Tell the app we're requesting form fields.
        dispatch({
            type: PAGE.GET_FORM_FIELDS
        });

        // Make the request.
        // Note: This would be done better than just hardcoding the URL...
        return fetch('/cms/data/page/' + id + '.json', { credentials: 'same-origin' })
            .then(response => response.json())
            .then(json => dispatch({
                type: PAGE.GET_FORM_FIELDS_SUCCESS,
                payload: json
            })
        );
    };
}

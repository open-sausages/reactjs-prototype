/**
 * Reducer for updating the `page` state key.
 */

import { PAGE } from '../constants/actionTypes';

function pageReducer(state = {}, action) {
    switch (action.type) {
        case PAGE.GET_FORM_FIELDS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case PAGE.GET_FORM_FIELDS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                formFields: action.payload.page.formFields,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default pageReducer;

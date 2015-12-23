/**
 * The function to call if you want some crazy colors.
 */

import { BETTER_LIST } from '../constants/actionTypes';

export function applyCrazyColors(color) {
    return (dispatch, getState) => {
        return dispatch({
            type: BETTER_LIST.CRAZY_COLORS,
            payload: {
                color: color
            }
        });
    };
}

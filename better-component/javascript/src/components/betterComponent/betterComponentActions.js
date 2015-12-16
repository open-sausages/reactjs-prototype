import * as actionTypes from './betterComponentConstants';

/**
 * The function to call if you want some crazy colors.
 */
export function applyCrazyColors(color) {
    return (dispatch, getState) => {
        return dispatch({
            type: actionTypes.CRAZY_COLORS,
            payload: {
                color: color
            }
        });
    };
}

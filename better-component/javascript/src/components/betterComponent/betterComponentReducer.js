import * as actionTypes from './betterComponentConstants';

function betterComponentReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.CRAZY_COLORS:
            return Object.assign({}, state, {
                betterComponentColor: action.payload.color
            });
        default:
            return state
    }
}

export default betterComponentReducer;

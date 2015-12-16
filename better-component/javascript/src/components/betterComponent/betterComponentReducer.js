import * as actionTypes from './betterComponentConstants';

export default function (nextReducer) {
    return function betterComponentReducer(state = {}, action) {
        switch (action.type) {
            case actionTypes.CRAZY_COLORS:
                return Object.assign({}, state, {
                    betterComponentColor: action.payload.color
                });
            default:
                return nextReducer(state, action);
        }
    }
}

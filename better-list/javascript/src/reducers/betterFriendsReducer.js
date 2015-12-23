import { BETTER_LIST } from '../constants/actionTypes';

export default function (nextReducer) {
    return function betterComponentReducer(state = {}, action) {
        switch (action.type) {
            case BETTER_LIST.CRAZY_COLORS:
                return Object.assign({}, state, {
                    betterComponentColor: action.payload.color
                });
            default:
                // Call the original reducer (friendsReducer.js)
                return nextReducer(state, action);
        }
    }
}

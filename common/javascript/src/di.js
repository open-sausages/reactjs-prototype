import Bottle from 'bottlejs';
import objectAssignDeep from 'object-assign-deep';

const defaultMapStateToPropsFn = (state) => {};

/**
 * Default DI container
 */
export let di = new Bottle();

/**
 * Helper for combining mapStateToProps functions.
 *
 * @param function defaultFn
 * @param function injectedFn
 * @return function
 */
export function combineMapStateToProps(defaultFn = defaultMapStateToPropsFn, injectedFn = defaultMapStateToPropsFn) {
    return (function (defaultFn, injectedFn) {
        return function mapStateToProps(state) {
            return Object.assign({}, defaultFn(state), injectedFn(state));
        };
    }(defaultFn, injectedFn));
};

/**
 * Merges dependency injected state with the initial CMS app's initial state.
 *
 * @param object initialState - CMS application initial state object.
 * @return object
 */
export function getCombinedInitialState(initialState) {
    var combinedInitialState = Object.assign({}, initialState);

    for (let key in di.container) {
        if (key.match(/_initialState$/) !== null) {
            combinedInitialState = objectAssignDeep(combinedInitialState, di.container[key]);
        }
    }

    return combinedInitialState;
}

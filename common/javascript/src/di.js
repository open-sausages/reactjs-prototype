import Bottle from 'bottlejs';

const defaultMapStateToPropsFn = (state) => {};

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
 * Default DI container
 */
export let di = new Bottle();

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './containers/app';
import friends from './components/friendsList/friendsListReducers';

// We need to provide a hook for developers to pass in there reducers here.
const reducers = combineReducers({
    friends
});

// Initial state for the core CMS application.
const initialState = {
    friends: {
        isFetching: false,
        friends: []
    }
}

// We need to provide a hook for developers to pass in Store Enhancers here.
// Store enhancers can set additional initial state required by modules.
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

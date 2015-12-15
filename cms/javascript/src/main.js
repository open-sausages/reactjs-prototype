import di from 'di';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import App from './containers/app';

const initialState = {
    friends: {
        isFetching: false,
        friends: []
    }
}

const store = createStore(initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

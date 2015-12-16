import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import app from './containers/app';

const initialState = {
    friends: {
        isFetching: false,
        friends: []
    }
}

window.appBoot = function appBoot() {
    const store = createStore(initialState);
    const App = app();

    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    );
};

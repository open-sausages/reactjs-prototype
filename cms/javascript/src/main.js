import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import app from './containers/app';

const initialState = {
    page: {
        isFetching: false,
        formFields: [],
        lastUpdated: null
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

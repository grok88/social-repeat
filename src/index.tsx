import './index.css';
import {AppRootStateType, store} from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";


export const rerenderEntireTree = (state: AppRootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState());
});


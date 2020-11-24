import './index.css';
import {AppRootStateType, store} from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export const StoreContext = React.createContext<any | null>(null);


export const rerenderEntireTree = (state: AppRootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState());
});


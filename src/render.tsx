import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updatePost} from './redux/state'

export const rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updatePost={updatePost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}




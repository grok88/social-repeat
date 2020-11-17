import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const dialogs = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Sergey'},
    {id: 4, name: 'Tanya'},
];
const messages = [
    {id: 1, message: 'This is Sparta!'},
    {id: 2, message: 'I likes WoW'},
    {id: 3, message: 'I want to see a mountain'},
];

const posts = [
    {id: 1, message: 'This is Sparta', likesCount: 5},
    {id: 2, message: 'Wow, You are big', likesCount: 6},
    {id: 3, message: 'Wow, I am good', likesCount: 7},
];

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs} messages={messages} posts={posts}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


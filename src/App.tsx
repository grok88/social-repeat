import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={()=><Profile/>}/>
                <Route path={'/dialogs'} render={()=><Dialogs/>}/>
            </div>
        </div>
    );
}

export default App;

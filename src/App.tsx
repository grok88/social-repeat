import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs, {DialogType, MessageType} from "./components/dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {PostType} from './components/profile/my-posts/MyPosts';

type AppPropsType = {
    state: {
        profilePage: {
            posts: Array<PostType>
        },
        dialogsPage: {
            dialogs: Array<DialogType>
            messages: Array<MessageType>
        }
    }
}

const App: React.FC<AppPropsType> = (props) => {
    const {state: {dialogsPage, profilePage}} = props;
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile data={profilePage}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs data={dialogsPage}/>}/>
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs, {DialogType, MessageType} from "./components/dialogs/Dialogs";
import {Route} from 'react-router-dom';
import { PostType } from './components/profile/my-posts/MyPosts';

type AppPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    posts : Array<PostType>
}

const App: React.FC<AppPropsType> = (props) => {
    const {dialogs,messages,posts} = props;
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile posts={posts}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
            </div>
        </div>
    );
}

export default App;

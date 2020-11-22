import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs, {DialogType, MessageType} from "./components/dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {PostType} from './components/profile/my-posts/MyPosts';
import {ActionsType} from "./redux/state";

export type AppPropsType = {
    state: {
        profilePage: {
            posts: Array<PostType>,
            newPostText: string
        },
        dialogsPage: {
            dialogs: Array<DialogType>
            messages: Array<MessageType>
            newMessText:string
        }
    },
    dispatch: (action: ActionsType) => void;
}

const App: React.FC<AppPropsType> = (props) => {
    const {state: {dialogsPage, profilePage}, dispatch} = props;
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile data={profilePage} dispatch={dispatch}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs data={dialogsPage} dispatch={dispatch} />}/>
            </div>
        </div>
    );
}

export default App;

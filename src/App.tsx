import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Route} from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';

export type AppPropsType = {
    store: any
}

const App: React.FC<AppPropsType> = (props) => {
    const {store} = props;
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile store={store}/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer store={store}/>}/>
            </div>
        </div>
    );
}

export default App;

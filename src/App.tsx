import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';

import UsersContainer from './components/users/UsersContainer';

import HeaderContainer from "./components/header/HeaderContainer";
import Login from './components/login/Login';
import {connect} from "react-redux";
import {AppRootStateType} from "./redux/redux-store";
import {compose} from 'redux';
import {initializedApp} from './redux/app-reducer'
import {Preloader} from "./components/common/preloader/Preloader";
import {withSuspense} from "./components/hoc/WithSuspens";

// import DialogsContainer from './components/dialogs/DialogsContainer';
// import ProfileContainer from "./components/profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

class App extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {

    componentDidMount() {
        this.props.initializedApp();
    }


    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'}
                           render={withSuspense(ProfileContainer)}/>
                    <Route path={'/dialogs'} render={withSuspense(ProfileContainer)}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

type MapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}
type MapDispatchToPropsType = {
    initializedApp: () => void
}

export default compose<React.ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {
        initializedApp
    }))(App)


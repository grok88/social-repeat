import React from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import {AppRootStateType} from "../../redux/redux-store";
import {logOut} from "../../redux/auth-reducer";

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;


class HeaderContainer extends React.Component<OwnPropsType> {

    render() {
        return <Header {...this.props}/>
    }
};

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
type MapDispatchToPropsType = {
    logOut: () => void
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {
    logOut
})(HeaderContainer);

import React from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import {AppRootStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;


class HeaderContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
        // authApi.authMe()
        //     .then(res => {
        //         const {email, id, login} = res.data.data;
        //         this.props.setAuthUserData({email, login, userId: id});
        //     })

    }

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
    getAuthUserData: () => void
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {getAuthUserData})(HeaderContainer);

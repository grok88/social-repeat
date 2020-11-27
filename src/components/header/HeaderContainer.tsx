import React from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import {AppRootStateType} from "../../redux/redux-store";
import {AuthRespType, setAuthUserData} from "../../redux/auth-reducer";
import {axiosInstance} from "../users/UsersAPIContainer";

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;

type AuthMeRespType = {
    messages: string[]
    resultCode: number
    data: {
        id: string,
        email: string
        login: string
    }
}

class HeaderContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        axiosInstance.get<AuthMeRespType>(`auth/me`)
            .then(res => {
                const {email, id, login} = res.data.data;
                this.props.setAuthUserData({email, login, userId: id});
            })
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
    setAuthUserData: (payload: AuthRespType) => void
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {setAuthUserData})(HeaderContainer);

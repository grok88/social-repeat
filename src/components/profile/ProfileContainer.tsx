import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {getProfile} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {getProfileRespType} from '../../api/api';

// type ProfilePropsType = {
//     profile: getProfileRespType | null
// }

type PathParamsType = {
    userId: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> &
    MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 8886
        }
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props} profile={this.props.profile}/>
    }
};

type MapStateToPropsType = {
    profile: getProfileRespType | null,
    isAuth: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
type MapDispatchToPropsType = {
    getProfile: (userId: number) => void
}

//withRouter
const ProfileContainerWithRoute = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {
    getProfile
})(ProfileContainerWithRoute);

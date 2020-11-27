import React from 'react';
import {connect} from 'react-redux';
import {axiosInstance} from '../users/UsersAPIContainer';
import Profile from "./Profile";
import {getProfile} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';

// type ProfilePropsType = {
//     profile: getProfileRespType | null
// }
export type getProfileRespType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}
type PathParamsType = {
    userId: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> &
    MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        // this.props.setIsFetching(true);
        if (!userId) {
            userId = String(8886);
        }
        axiosInstance.get<getProfileRespType>(`profile/` + userId)
            .then(res => {
                this.props.getProfile(res.data);
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
};

type MapStateToPropsType = {
    profile: getProfileRespType | null
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
type MapDispatchToPropsType = {
    getProfile: (profile: getProfileRespType) => void
}

//withRouter
const ProfileContainerWithRoute = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {
    getProfile
})(ProfileContainerWithRoute);

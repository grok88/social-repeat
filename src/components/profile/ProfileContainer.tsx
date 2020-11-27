import React from 'react';
import {connect} from 'react-redux';
import {axiosInstance} from '../users/UsersAPIContainer';
import Profile from "./Profile";
import {getProfile} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type ProfilePropsType = {
    profile: getProfileRespType | null
}
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

class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType, any> {
    componentDidMount() {
        // this.props.setIsFetching(true);
        axiosInstance.get<getProfileRespType>(`profile/${2}`)
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
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {
    getProfile
})(ProfileContainer);

import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {getProfile} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
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
        // this.props.setIsFetching(true);
        if (!userId) {
            userId = 8886
        }
        this.props.getProfile(userId);
        // axiosInstance.get<getProfileRespType>(`profile/` + userId)
        //     .then(res => {
        //         this.props.getProfile(res.data);
        //     })
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
    getProfile: (userId: number) => void
}

//withRouter
const ProfileContainerWithRoute = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {
    getProfile
})(ProfileContainerWithRoute);

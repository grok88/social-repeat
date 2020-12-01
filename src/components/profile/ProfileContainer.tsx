import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getProfileRespType} from '../../api/api';
import {compose} from "redux";


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
            if(this.props.authorizedUserId){
                userId = +this.props.authorizedUserId;
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
};

type MapStateToPropsType = {
    profile: getProfileRespType | null,
    status: string,
    authorizedUserId:string | null
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId:state.auth.userId
    }
}
type MapDispatchToPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}


export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

// // hoc REdirect
// const ProfileContainerRedirect = withAuthRedirect(ProfileContainer);
// //withRouter
// const ProfileContainerWithRoute = withRouter(ProfileContainerRedirect);
//
// export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {
//     getProfile
// })(ProfileContainerWithRoute);

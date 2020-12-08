import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {getProfile, getStatus, saveFile, updateStatus,saveProfile} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getProfileRespType} from '../../api/api';
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {FormDataType} from "./prodile-info/ProfileDataForm";


type PathParamsType = {
    userId: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> &
    MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            if (this.props.authorizedUserId) {
                userId = +this.props.authorizedUserId;
            }
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    onSavePhoto = (file: any) => {
        this.props.saveFile(file);
    }
    saveProfile = (formData: FormDataType) =>{
        this.props.saveProfile(formData);
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        isOwner={!this.props.match.params.userId}
                        saveFile={this.onSavePhoto}
                        saveProfile={this.saveProfile}
        />
    }
};

type MapStateToPropsType = {
    profile: getProfileRespType | null,
    status: string,
    authorizedUserId: string | null
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }
}
type MapDispatchToPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    saveFile: (file: any) => void;
    saveProfile:(formData: FormDataType) => void
}


export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
        saveFile,
        saveProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

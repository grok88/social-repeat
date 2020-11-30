import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./prodile-info/ProfileInfo";
import MyPostsContainer from "./my-posts/MyPostsContainer";
import {getProfileRespType} from "../../api/api";

type ProfilePropsType = {
    // store: any
    profile:getProfileRespType | null
    status:string
    updateStatus : (status:string) =>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;

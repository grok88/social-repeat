import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./prodile-info/ProfileInfo";
import MyPostsContainer from "./my-posts/MyPostsContainer";
import {getProfileRespType} from "../../api/api";

type ProfilePropsType = {
    // store: any
    profile:getProfileRespType | null
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;

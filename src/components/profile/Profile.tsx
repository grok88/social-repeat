import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./prodile-info/ProfileInfo";
import MyPostsContainer from "./my-posts/MyPostsContainer";

type ProfilePropsType = {
    store: any
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;

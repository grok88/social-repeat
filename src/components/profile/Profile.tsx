import React from 'react';
import MyPosts from './my-posts/MyPosts';
import styles from './Profile.module.css'
import ProfileInfo from "./prodile-info/ProfileInfo";

const Profile = () => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;

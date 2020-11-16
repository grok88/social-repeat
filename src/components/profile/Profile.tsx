import React from 'react';
import MyPosts from './my-posts/MyPosts';
import styles from './Profile.module.css'

const Profile = () => {
    return (
        <div className={styles.content}>
            <div className={styles.imgBlock}>
                <img src="https://www.neuroarchitecting.org/background.jpg" alt="main_image" className={styles.img}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>

        </div>
    );
};

export default Profile;

import React from 'react';
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.imgBlock}>
                <img src="https://www.neuroarchitecting.org/background.jpg" alt="main_image" className={styles.img}/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;

import React from 'react';
import styles from "./ProfileInfo.module.css";
import {getProfileRespType} from "../ProfileContainer";
import {Preloader} from "../../common/preloader/Preloader";

type PropfileInfoPropsType = {
    profile: getProfileRespType | null
}
const ProfileInfo: React.FC<PropfileInfoPropsType> = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={styles.imgBlock}>
                <img src="https://www.neuroarchitecting.org/background.jpg" alt="main_image" className={styles.img}/>
            </div>
            <div>
                <div>
                    <img src={profile?.photos.large} alt='User photography'/>
                </div>
                <div>
                    <p>Name : <span>{profile?.fullName}</span></p>
                </div>
                <div>
                    <p>lookingForAJob : <span>{profile?.lookingForAJob}</span></p>
                </div>
                <div>
                    <p>lookingForAJob description: <span>{profile?.lookingForAJobDescription}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;

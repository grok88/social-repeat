import React from 'react';
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/Preloader";
import {getProfileRespType} from "../../../api/api";
import ProfileStatus from "./ProfileStatus";

type PropfileInfoPropsType = {
    profile: getProfileRespType | null
    status: string
    updateStatus: (status: string) => void
}
const ProfileInfo: React.FC<PropfileInfoPropsType> = ({profile, updateStatus, status}) => {
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
                <ProfileStatus status={status} updateStatus={updateStatus}/>
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

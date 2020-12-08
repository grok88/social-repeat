import React, {ChangeEvent} from 'react';
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/Preloader";
import {getProfileRespType} from "../../../api/api";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import avatar from '../../../assets/images/avatar.png'

type PropfileInfoPropsType = {
    profile: getProfileRespType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    saveFile: (file: any) => void;
}
const ProfileInfo: React.FC<PropfileInfoPropsType> = ({profile, updateStatus, status, isOwner, saveFile}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onSelectMainFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        saveFile(file);
    }
    return (
        <div>
            <div className={styles.imgBlock}>
                <img src="https://www.neuroarchitecting.org/background.jpg" alt="main_image" className={styles.img}/>

            </div>
            <div>
                <div>
                    <img src={profile?.photos.large ? profile.photos.large : avatar} alt='User photography'
                         style={{width: '200px', height: 'auto'}}/>
                    {isOwner && <input type="file" onChange={onSelectMainFile}/>}
                </div>
                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
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

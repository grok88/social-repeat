import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./prodile-info/ProfileInfo";
import MyPostsContainer from "./my-posts/MyPostsContainer";
import {getProfileRespType} from "../../api/api";
import {FormDataType} from "./prodile-info/ProfileDataForm";

type ProfilePropsType = {
    // store: any
    profile:getProfileRespType | null
    status:string
    updateStatus : (status:string) =>void
    isOwner:boolean
    saveFile: (file: any) => void;
    saveProfile:(formData: FormDataType) => void

}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo  saveProfile={props.saveProfile}  profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} saveFile={props.saveFile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;

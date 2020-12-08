import React, {ChangeEvent, useState} from 'react';
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/Preloader";
import {getProfileRespType} from "../../../api/api";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import avatar from '../../../assets/images/avatar.png'
import {FormDataType, ProfileDataFormRedux} from "./ProfileDataForm";

type PropfileInfoPropsType = {
    profile: getProfileRespType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    saveFile: (file: any) => void;
    saveProfile:(formData: FormDataType) => void
}
const ProfileInfo: React.FC<PropfileInfoPropsType> = ({profile, updateStatus, status, isOwner, saveFile,saveProfile}) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const onSelectMainFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        saveFile(file);
    }

    const onSubmit = (formData: FormDataType) => {
        saveProfile(formData)
        // setEditMode(false);
    }
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
                    <img src={profile?.photos.large ? profile.photos.large : avatar} alt='User photography'
                         style={{width: '200px', height: 'auto'}}/>
                    {isOwner && <input type="file" onChange={onSelectMainFile}/>}
                </div>
                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                {
                    editMode
                        ? <ProfileDataFormRedux profile={profile} initialValues={profile}  onSubmit={onSubmit}/>
                        : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={setEditMode}/>
                }

            </div>
        </div>
    );
};

export default ProfileInfo;


type ProfileDataPropsType = {
    profile: getProfileRespType
    isOwner: boolean
    goToEditMode: (value: boolean) => void
}
export const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode, }) => {
    return <div>
        {
            isOwner && <button onClick={() => goToEditMode(true)}>Edit Profile</button>
        }

        <div>
            <p><b>Name :</b> <span>{profile?.fullName}</span></p>
        </div>
        <div>
            <p><b>About Me :</b> <span>{profile?.aboutMe}</span></p>
        </div>
        <div>
            <p><b>lookingForAJob :</b> <span>{profile?.lookingForAJob ? 'Yes' : 'No'}</span></p>
        </div>

        {profile?.lookingForAJob &&
        <div>
            <p><b>lookingForAJob description: </b><span>{profile?.lookingForAJobDescription}</span></p>
        </div>
        }
        <div>
            <div>
                <b>Contacts: </b><span>{Object.keys(profile.contacts).map(key =>
                <Contact key={key} objKey={key} contactValue={profile.contacts[key]}/>)}</span>
            </div>
        </div>
    </div>
}

// contacts
type ContactPropsType = {
    objKey: string
    contactValue: string
}
const Contact: React.FC<ContactPropsType> = ({objKey, contactValue}) => {
    return <div style={{paddingLeft: '10px'}}>
        <b>{objKey} : </b>{contactValue}
    </div>
}
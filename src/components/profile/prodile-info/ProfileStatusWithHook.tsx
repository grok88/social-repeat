import React, {ChangeEvent, useEffect, useState} from "react";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}
export const ProfileStatusWithHook: React.FC<ProfileStatusType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return <div>
        <strong>Status: </strong>
        {
            editMode ? <input type="text" onChange={onChangeStatus} value={status}
                              onBlur={deActivateEditMode}/> :
                <span onClick={activateEditMode}>{props.status || 'no Status'}</span>
        }
    </div>
}

export default ProfileStatusWithHook;
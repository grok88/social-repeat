import React, {ChangeEvent} from "react";
import { useState } from "react";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}
 export const ProfileStatusWithHook: React.FC<ProfileStatusType>  = (props) =>{
    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);


    const activateEditMode = () => {
        setEditMode(true);
    }

    const deActivateEditMode = () => {
        setEditMode(false);
       props.updateStatus(status);
    }
    // componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
    //     if(prevProps.status !== this.props.status){
    //         this.setState({
    //             status:this.props.status
    //         })
    //     }
    // }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }


        return <div>
            <strong>Status: </strong>
            {
                editMode ? <input type="text" onChange={onChangeStatus} value={status}
                                              onBlur={deActivateEditMode}/> : <span onClick={activateEditMode}>{props.status || 'no Status'}</span>
            }
        </div>

}


export default ProfileStatusWithHook;
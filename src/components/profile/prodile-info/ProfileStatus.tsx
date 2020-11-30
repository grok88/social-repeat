import React, {ChangeEvent} from "react";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <div>
            <strong>Status: </strong>
            {
                !this.state.editMode && <span onClick={this.activateEditMode}>{this.props.status || 'no Status'}</span>
            }
            {
                this.state.editMode && <input type="text" onChange={this.onChangeStatus} value={this.state.status}
                                              onBlur={this.deActivateEditMode}/>
            }
        </div>
    }
}


export default ProfileStatus;
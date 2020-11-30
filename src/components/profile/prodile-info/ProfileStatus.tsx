import React from "react";

class ProfileStatus extends React.Component<{ status: string }, any> {
    state = {
        editMode: false
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
    }

    render() {
        return <div>
            <strong>Status: </strong>
            {
                !this.state.editMode && <span onClick={this.activateEditMode}>{this.props.status}</span>
            }
            {
                this.state.editMode && <input type="text" value={this.props.status} onBlur={this.deActivateEditMode}/>
            }
        </div>
    }
}


export default ProfileStatus;
import {addMessageAC, DialogsStateType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import React from 'react'

type MapStateToPropsType = {
    dialogsPage: DialogsStateType
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
type MapDispatchToPropsType = {
    addMessage: (newMess: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMess: string) => {
            dispatch(addMessageAC(newMess));
        }
    }
}

//compose
export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(Dialogs);

// const DialogsWithRedirect = withAuthRedirect(Dialogs)
// const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(DialogsWithRedirect);
// export default DialogsContainer;

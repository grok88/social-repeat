import {addMessageAC, DialogsStateType, updateMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
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
    addMessage: () => void
    updateMessage: (text: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC());
        },
        updateMessage: (text: string) => {
            dispatch(updateMessageAC(text));
        }
    }
}

//compose
export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

// const DialogsWithRedirect = withAuthRedirect(Dialogs)
// const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(DialogsWithRedirect);
// export default DialogsContainer;

import {addMessageAC, DialogsStateType, updateMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";

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
const DialogsWithRedirect = withAuthRedirect(Dialogs)
const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(DialogsWithRedirect);

export default DialogsContainer;

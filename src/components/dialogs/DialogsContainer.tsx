import React from 'react';
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";


export type DialogsContainerPropsType = {
    store: any
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
    const state: AppRootStateType = props.store.getState();

    const addMessage = () => {
        props.store.dispatch(addMessageAC());
    }
    const onChangeMess = (text: string) => {
        props.store.dispatch(updateMessageAC(text));
    }
    return <Dialogs data={state.dialogsPage} addMessage={addMessage} updateMessage={onChangeMess}/>;
};

export default DialogsContainer;

import React from 'react';
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {StoreContext} from "../../index";


export type DialogsContainerPropsType = {
    // store: any
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    return <StoreContext.Consumer>
        {
            store => {
                const state: AppRootStateType = store.getState();

                const addMessage = () => {
                    store.dispatch(addMessageAC());
                }
                const onChangeMess = (text: string) => {
                    store.dispatch(updateMessageAC(text));
                }
                return <Dialogs data={state.dialogsPage} addMessage={addMessage} updateMessage={onChangeMess}/>;
            }
        }
    </StoreContext.Consumer>

};

export default DialogsContainer;

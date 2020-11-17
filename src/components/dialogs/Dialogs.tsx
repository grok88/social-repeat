import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsPropsType = {
    data: {
        dialogs: Array<DialogType>
        messages: Array<MessageType>
    }
}
const Dialogs: React.FC<DialogsPropsType> = ({data:{dialogs, messages}}) => {

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {
                    dialogs.map(d => <Dialog id={d.id} name={d.name} key={d.id}/>)
                }
            </div>
            <div className={styles.messages}>
                {
                    messages.map(m => <Message message={m.message} key={m.id}/>)
                }
            </div>
        </div>
    );
};

export default Dialogs;

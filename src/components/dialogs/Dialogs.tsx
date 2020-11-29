import React, {useRef} from 'react';
import styles from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import { Redirect } from 'react-router-dom';

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsPropsType = {
    dialogsPage: {
        dialogs: Array<DialogType>
        messages: Array<MessageType>
        newMessText: string
    }
    addMessage: () => void
    updateMessage: (text: string) => void
    isAuth:boolean
}
const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage: {dialogs, messages, newMessText}, addMessage, updateMessage,isAuth}) => {

    const messageRef = useRef<HTMLTextAreaElement>(null);

    const onAddMessage = () => {
        addMessage();
    }
    const onChangeMess = () => {
        const text = messageRef && messageRef.current && messageRef.current.value;
        updateMessage(text as string);
    }

    // if(!isAuth) return <Redirect to={'/login'}/>

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
                <div>
                    <textarea ref={messageRef} value={newMessText} onChange={onChangeMess}></textarea>
                    <button onClick={onAddMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;

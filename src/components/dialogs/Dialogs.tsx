import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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
    addMessage: (newMess: string) => void
}
const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage: {dialogs, messages}, addMessage}) => {


    const submit = (values: FormDataType) => {
        addMessage(values.newMessage)
        console.log(values)
    }
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
                <DialogsReduxForm onSubmit={submit}/>
            </div>
        </div>
    );
};


type FormDataType = {
    newMessage: string
}

export const DialogsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <Field name='newMessage'
               component={'textarea'}
               placeholder={'Enter new message'}
        ></Field>
        <button type={'submit'}>Add Message</button>
    </form>
}

const DialogsReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'dialogAddMessageForm'
})(DialogsForm)

export default Dialogs;

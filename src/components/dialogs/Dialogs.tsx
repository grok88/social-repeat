import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";

const Dialogs = () => {
    const dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Tanya'},
    ];
    const messages = [
        {id: 1, message: 'This is Sparta!'},
        {id: 2, message: 'I likes WoW'},
        {id: 3, message: 'I want to see a mountain'},
    ];
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

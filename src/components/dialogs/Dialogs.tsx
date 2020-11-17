import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <Dialog id={'1'} name={'Alex'}/>
                <Dialog id={'2'} name={'Sveta'}/>
                <Dialog id={'3'} name={'Sergey'}/>
                <Dialog id={'4'} name={'Tanya'}/>
            </div>
            <div className={styles.messages}>
                <Message title={'This is Sparta!'}/>
                <Message title={' I likes WoW'}/>
                <Message title={'  I want to see a mountain'}/>
            </div>
        </div>
    );
};

export default Dialogs;

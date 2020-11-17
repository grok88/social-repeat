import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <div className={styles.dialog}>
                    <NavLink to={'/dialogs/1'}>Alex</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={'/dialogs/2'}>Sveta</NavLink>
                </div>
                <div className={`${styles.dialog} ${styles.active}`}>
                    <NavLink to={'/dialogs/3'}>Sergey</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={'/dialogs/4'}>Tanya</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    This is Sparta!
                </div>
                <div className={styles.message}>
                    I likes WoW
                </div>
                <div className={styles.message}>
                    I want to see a mountain
                </div>
            </div>
        </div>
    );
};

export default Dialogs;

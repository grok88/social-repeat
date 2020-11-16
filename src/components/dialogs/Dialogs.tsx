import React from 'react';
import styles from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <div className={styles.dialog}>
                    Alex
                </div>
                <div className={styles.dialog}>
                    Sveta
                </div>
                <div className={`${styles.dialog} ${styles.active}` }>
                    Sergey
                </div>
                <div className={styles.dialog}>
                    Tanya
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

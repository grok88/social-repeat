import React from 'react';
import styles from "./Message.module.css";
type MessagePropsType  ={
    title:string
}
const Message:React.FC<MessagePropsType> = ({title}) => {
    return (
        <div className={styles.message}>
            {title}
        </div>
    );
};

export default Message;

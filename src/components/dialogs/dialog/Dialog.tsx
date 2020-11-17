import React from 'react';
import styles from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
type DialogPropsType = {
    id:number
    name:string
}
const Dialog:React.FC<DialogPropsType> = ({id,name}) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${id}`}  activeClassName={styles.active}>{name}</NavLink>
        </div>
    );
};

export default Dialog;

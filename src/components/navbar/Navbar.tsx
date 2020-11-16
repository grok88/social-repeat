import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
    return <nav className={styles.nav}>
        <div className={`${styles.item}`}>
            <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/users" activeClassName={styles.active}>Users</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/setting" activeClassName={styles.active}>Setting</NavLink>
        </div>
    </nav>
};

export default Navbar;

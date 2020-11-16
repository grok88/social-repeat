import React from 'react';
import styles from  './Navbar.module.css'

const Navbar = () => {
    return <nav className={styles.nav}>
        <div className={`${styles.item} ${styles.active}`}>
            <a href="#">Profile</a>
        </div>
        <div className={styles.item}>
            <a href="#">Messages</a>
        </div>
        <div className={styles.item}>
            <a href="#">News</a>
        </div>
        <div className={styles.item}>
            <a href="#">Users</a>
        </div>
        <div className={styles.item}>
            <a href="#">Setting</a>
        </div>
    </nav>
};

export default Navbar;

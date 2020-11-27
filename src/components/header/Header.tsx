import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}
const Header: React.FC<HeaderPropsType> = (props) => {
    return <header className={styles.header}>
        {
            props.isAuth ? <span>{props.login}</span> : <div className={styles.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        }
    </header>
};

export default Header;

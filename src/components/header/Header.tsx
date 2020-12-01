import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logOut: () => void
}
const Header: React.FC<HeaderPropsType> = (props) => {
    // if (!props.isAuth) {
    //     return <Redirect to={'/login'}/>
    // }
    return <header className={styles.header}>
        {
            props.isAuth ? <div>{props.login} - <button onClick={props.logOut}>logOut</button></div> :
                <div className={styles.loginBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
        }
    </header>
};

export default Header;

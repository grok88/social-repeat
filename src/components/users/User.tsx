import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from './Users.module.css'
import avatar from './../../assets/images/avatar.png'
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    user: UserType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingInProgress: Array<number>
}
export const User: React.FC<UsersPropsType> = (props) => {
    const {user, follow, unFollow, followingInProgress} = props;


    return <div>
        <div>
            <NavLink to={'/profile/' + user.id}>
                <div className={styles.avatarImg}>
                    <img src={user.photos.small ? user.photos.small : avatar} alt={'User avatar'}/>
                </div>
            </NavLink>

            <div>
                {
                    user.followed ? <button onClick={() => {
                            unFollow(user.id);
                        }} disabled={followingInProgress.some(id => id === user.id)}>unFollow</button> :
                        <button onClick={() => {
                            follow(user.id);
                        }} disabled={followingInProgress.some(id => id === user.id)}>Follow</button>
                }
            </div>
        </div>
        <div>
            <div>
                {user.name}
            </div>
            <div>{user.status ? user.status : 'Not status'}</div>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
        </div>

    </div>


}

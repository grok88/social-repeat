import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from './Users.module.css'
import {User} from "./User";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    // pages: Array<number>

    // currentPage: number
    // changeCurrent: (current: number) => void
    toggleFollowingInProgress: (userId: number, followingInProgress: boolean) => void
    followingInProgress: Array<number>
}
export const Users: React.FC<UsersPropsType> = (props) => {
    const {users, follow, unFollow, followingInProgress} = props;


    return <div>
        {/*<div>*/}
        {/*    {*/}
        {/*        pages.map(p => {*/}
        {/*            return <span key={p}*/}
        {/*                         className={currentPage === p ? styles.currentPage : ''}*/}
        {/*                         onClick={() => changeCurrent(p)}*/}
        {/*            >{p}</span>*/}
        {/*        })*/}
        {/*    }*/}
        {/*</div>*/}
        {
            users.map(u => <User key={u.id + u.name + Math.random()} user={u} follow={follow} unFollow={unFollow}
                                 followingInProgress={followingInProgress}/>)
        }
    </div>
}

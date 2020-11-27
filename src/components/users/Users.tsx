import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from './Users.module.css'
import avatar from './../../assets/images/avatar.png'
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    // setUsers: (users: Array<UserType>) => void
    pages: Array<number>
    // pageSize:number
    // totalUserCount:number
    currentPage: number
    changeCurrent: (current: number) => void
}
export const Users: React.FC<UsersPropsType> = (props) => {
    const {users, follow, unFollow, pages, changeCurrent, currentPage} = props;


    return <div>
        <div>
            {
                pages.map(p => {
                    return <span key={p}
                                 className={currentPage === p ? styles.currentPage : ''}
                                 onClick={() => changeCurrent(p)}
                    >{p}</span>
                })
            }
        </div>
        {
            users.map(u => <div key={u.id + u.name + Math.random()}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <div className={styles.avatarImg}>
                            <img src={u.photos.small ? u.photos.small : avatar} alt={'User avatar'}/>
                        </div>
                    </NavLink>

                    <div>
                        {
                            u.followed ? <button onClick={() => unFollow(u.id)}>Follow</button> :
                                <button onClick={() => follow(u.id)}>Unfollow</button>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        {u.name}
                    </div>
                    <div>{u.status ? u.status : 'Not status'}</div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>

            </div>)
        }
    </div>
}

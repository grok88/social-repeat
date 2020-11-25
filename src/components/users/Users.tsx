import React, {useEffect} from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from './Users.module.css'
import axios from 'axios'
import avatar from './../../assets/images/avatar.png'

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})
type getUsersRespType = {
    totalCount: number
    error: string
    items: Array<UserType>
}

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
export const Users: React.FC<UsersPropsType> = (props) => {
    const {users, follow, setUsers, unFollow} = props;

    useEffect(() => {
        axiosInstance.get<getUsersRespType>('users')
            .then(res => {
                setUsers(res.data.items);
            })

    }, [])

    return <div>
        {
            users.map(u => <div key={u.id}>
                <div>
                    <div className={styles.avatarImg}>
                        <img src={u.photos.small ? u.photos.small : avatar} alt={'User avatar'}/>
                    </div>
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

import React, {Component} from 'react';
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

export class Users extends Component<UsersPropsType, any> {
    constructor(props: UsersPropsType) {
        super(props);
        alert('rtt')
        axiosInstance.get<getUsersRespType>('users')
            .then(res => {
                this.props.setUsers(res.data.items);
            })
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id + u.name}>
                    <div>
                        <div className={styles.avatarImg}>
                            <img src={u.photos.small ? u.photos.small : avatar} alt={'User avatar'}/>
                        </div>
                        <div>
                            {
                                u.followed ? <button onClick={() => this.props.unFollow(u.id)}>Follow</button> :
                                    <button onClick={() => this.props.follow(u.id)}>Unfollow</button>
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
}

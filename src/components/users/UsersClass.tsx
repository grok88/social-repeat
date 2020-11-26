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
    pageSize: number
    totalUserCount: number
    currentPage: number
    changeCurrent: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
}

export class Users extends Component<UsersPropsType, any> {

    componentDidMount() {
        axiosInstance.get<getUsersRespType>(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUserCount(res.data.totalCount);
            })
    }

    changeCurrent(currentPage: number) {
        this.props.changeCurrent(currentPage);
        axiosInstance.get<getUsersRespType>(`users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            })
    }

    render() {
        const pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {
                    pages.map(p => {
                        return <span key={p}
                                     className={this.props.currentPage === p ? styles.currentPage : ''}
                                     onClick={() => this.changeCurrent(p)}
                        >{p}</span>
                    })
                }
            </div>
            {
                this.props.users.map(u => <div key={u.id + u.name + Math.random()}>
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

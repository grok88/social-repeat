import React, {Component} from 'react';
import {UserType} from "../../redux/users-reducer";
import axios from 'axios'
import {Users} from "./Users";
import {Preloader} from '../common/preloader/Preloader';

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
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
}

export class UsersAPIContainer extends Component<UsersPropsType, any> {

    componentDidMount() {
        this.props.setIsFetching(true);
        axiosInstance.get<getUsersRespType>(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setIsFetching(false);
                this.props.setUsers(res.data.items);
                this.props.setTotalUserCount(res.data.totalCount);
            })
    }

    changePageCurrent = (currentPage: number) => {
        this.props.setIsFetching(true);
        this.props.changeCurrent(currentPage);
        axiosInstance.get<getUsersRespType>(`users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setIsFetching(false);
                this.props.setUsers(res.data.items);
            })
    }

    render() {
        const pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return <> {
            this.props.isFetching ? <Preloader/> :
                <Users users={this.props.users} follow={this.props.follow} unFollow={this.props.unFollow} pages={pages}
                       currentPage={this.props.currentPage}
                       changeCurrent={this.changePageCurrent}/>
        }
        </>
    }
}

import React, {Component} from 'react';
import {UserType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from '../common/preloader/Preloader';
import {usersAPI} from "../../api/api";


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
    toggleFollowingInProgress: (userId: number, followingInProgress: boolean) => void
    followingInProgress: Array<number>
}

export class UsersAPIContainer extends Component<UsersPropsType, any> {

    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.setIsFetching(false);
                this.props.setUsers(res.data.items);
                this.props.setTotalUserCount(res.data.totalCount);
            })
    }

    changePageCurrent = (currentPage: number) => {
        this.props.setIsFetching(true);
        this.props.changeCurrent(currentPage);
        usersAPI.getUsers(currentPage, this.props.pageSize)
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
                       changeCurrent={this.changePageCurrent}
                       followingInProgress={this.props.followingInProgress}
                       toggleFollowingInProgress={this.props.toggleFollowingInProgress}

                />
        }
        </>
    }
}

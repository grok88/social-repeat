import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, User} from '../../redux/users-reducer';
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: Array<User>
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<User>) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: Array<User>) => {
            dispatch(setUsersAC(users));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);

import {Users} from "./UsersClass";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, setCurrentAC, setTotalUserCountAC, setUsersAC, unFollowAC, UserType} from '../../redux/users-reducer';
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    changeCurrent: (currentPage: number) => void
    setTotalUserCount:(totalCount:number) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
        changeCurrent: (currentPage: number) => {
            dispatch(setCurrentAC(currentPage));
        },
        setTotalUserCount:(totalCount:number) => {
            dispatch(setTotalUserCountAC(totalCount));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);

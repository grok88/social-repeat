import {UsersAPIContainer} from "./UsersAPIContainer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    changeCurrent,
    follow, getUsers,
    setIsFetching,
    setTotalUserCount,
    changePage, toggleFollowingInProgress,
    unFollow,
    UserType
} from '../../redux/users-reducer';

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean,
    followingInProgress: Array<number>
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void

    getUsers: (currentPage:number,pageSize:number) => void
    changePage: (currentPage:number,pageSize:number) => void

    changeCurrent: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (userId: number, followingInProgress: boolean) => void
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId));
//         },
//         unFollow: (userId: number) => {
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users));
//         },
//         changeCurrent: (currentPage: number) => {
//             dispatch(setCurrentAC(currentPage));
//         },
//         setTotalUserCount: (totalCount: number) => {
//             dispatch(setTotalUserCountAC(totalCount));
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// }
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {
    setTotalUserCount,
    changeCurrent,
    follow,
    setIsFetching,
    getUsers,
    changePage,
    unFollow,
    toggleFollowingInProgress
})(UsersAPIContainer);

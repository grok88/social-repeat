import {UsersAPIContainer} from "./UsersAPIContainer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    changeCurrent,
    changePage,
    follow,
    getUsers,
    setIsFetching,
    setTotalUserCount,
    toggleFollowingInProgress,
    unFollow,
    UserType
} from '../../redux/users-reducer';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsersSelector
} from "../../redux/users-selector";

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
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void

    getUsers: (currentPage: number, pageSize: number) => void
    changePage: (currentPage: number, pageSize: number) => void

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

import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

type FollowACType = ReturnType<typeof followSuccess>;
type UnFollowACType = ReturnType<typeof unFollowSuccess>;
type SetUsersACType = ReturnType<typeof setUsers>;
type SetCurrentACType = ReturnType<typeof changeCurrent>;
type SetTotalUserCountACType = ReturnType<typeof setTotalUserCount>;
type SetIsFetchingACType = ReturnType<typeof setIsFetching>;
type ToggleFollowingInProgressACType = ReturnType<typeof toggleFollowingInProgress>;

export type UsersActionsType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentACType
    | SetTotalUserCountACType
    | SetIsFetchingACType
    | ToggleFollowingInProgressACType;

type UsersStateType = typeof initialState;
export type UserType = {
    id: number
    name: string
    status: string | null
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
}
const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[]
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    } else {
                        return u
                    }
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    } else {
                        return u
                    }
                })
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.current
            }
        case "SET-TOTAL-USER-COUNT":
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE-FOLLOWING-IN-PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const;
}
export const unFollowSuccess = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const;
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const changeCurrent = (current: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        current
    } as const
}
export const setTotalUserCount = (totalUserCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        totalUserCount
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}
export const toggleFollowingInProgress = (userId: number, followingInProgress: boolean) => {
    return {
        type: 'TOGGLE-FOLLOWING-IN-PROGRESS',
        userId,
        followingInProgress
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(res => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(res.data.items));
            dispatch(setTotalUserCount(res.data.totalCount));
        })
}
export const changePage = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(changeCurrent(currentPage));
    usersAPI.getUsers(currentPage, pageSize)
        .then(res => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(res.data.items));
        })
}

export const follow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(userId, true));
    usersAPI.follow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingInProgress(userId, false));
        }).catch(err => console.log(err))
}
export const unFollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(userId, true));
    usersAPI.unFollow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowSuccess(userId));
            }
            dispatch(toggleFollowingInProgress(userId, false));
        }).catch(err => console.log(err))
}

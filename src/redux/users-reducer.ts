type FollowACType = ReturnType<typeof follow>;
type UnFollowACType = ReturnType<typeof unFollow>;
type SetUsersACType = ReturnType<typeof setUsers>;
type SetCurrentACType = ReturnType<typeof changeCurrent>;
type SetTotalUserCountACType = ReturnType<typeof setTotalUserCount>;
type SetIsFetchingACType = ReturnType<typeof setIsFetching>;

export type UsersActionsType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentACType
    | SetTotalUserCountACType
    |SetIsFetchingACType;

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
    isFetching:false
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
        default:
            return state;
    }
}

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const;
}
export const unFollow = (userId: number) => {
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
export const setIsFetching = (isFetching:boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}

type FollowACType = ReturnType<typeof followAC>;
type UnFollowACType = ReturnType<typeof unFollowAC>;
type SetUsersACType = ReturnType<typeof setUsersAC>;
type SetCurrentACType = ReturnType<typeof setCurrentAC>;
type SetTotalUserCountACType = ReturnType<typeof setTotalUserCountAC>;

export type UsersActionsType = FollowACType | UnFollowACType | SetUsersACType | SetCurrentACType | SetTotalUserCountACType;

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
    currentPage: 4
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
        default:
            return state;
    }
}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const;
}
export const unFollowAC = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const;
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentAC = (current: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        current
    } as const
}
export const setTotalUserCountAC = (totalUserCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        totalUserCount
    } as const
}

type FollowACType = ReturnType<typeof followAC>;
type UnFollowACType = ReturnType<typeof unFollowAC>;
type SetUsersACType = ReturnType<typeof setUsersAC>;

export type UsersActionsType = FollowACType | UnFollowACType | SetUsersACType;

type UsersStateType = typeof initialState;
export type User = {
    id: number
    userUrl: string
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
    followed: boolean
}
const initialState = {
    users: [] as Array<User>,
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
                users: [...state.users, ...action.users]
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
export const setUsersAC = (users: Array<User>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

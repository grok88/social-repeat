import {Dispatch} from "redux";
import {authApi} from "../api/api";

type SetAuthUserDataACType = ReturnType<typeof setAuthUserData>;

export type AuthActionsType = SetAuthUserDataACType;

type  AuthStateType = typeof initialState;

export type AuthRespType = {
    userId: string | null
    email: string | null
    login: string | null
}
const initialState = {
    userId: null as string | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (payload: AuthRespType) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        payload
    } as const;
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authApi.authMe()
        .then(res => {
            const {email, id, login} = res.data.data;
            dispatch(setAuthUserData({email, login, userId: id}));
        })
}

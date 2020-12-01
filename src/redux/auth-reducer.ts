import {Dispatch} from "redux";
import { stopSubmit } from "redux-form";
import {authApi} from "../api/api";

type SetAuthUserDataACType = ReturnType<typeof setAuthUserData>;

export type AuthActionsType = SetAuthUserDataACType;

type  AuthStateType = typeof initialState;

export type AuthRespType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
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
            if (res.data.resultCode === 0) {
                const {email, id, login} = res.data.data;
                dispatch(setAuthUserData({email, login, userId: id, isAuth: true}));
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {


    authApi.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                // @ts-ignore
                dispatch(getAuthUserData());
            } else {
                const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error';
                const action = stopSubmit('login', {_error:message});
                dispatch(action)
            }
        })
}
export const logOut = () => (dispatch: Dispatch) => {
    authApi.logOut()
        .then(res => {
            if (res.data.resultCode === 0) {
                // @ts-ignore
                dispatch(setAuthUserData({email: null, login: null, userId: null, isAuth: false}));
            }
        })
}

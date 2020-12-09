import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {authApi, securityApi} from "../api/api";

type SetAuthUserDataACType = ReturnType<typeof setAuthUserData>;
type SetCaptchaUrlACType = ReturnType<typeof setCaptchaUrl>;

export type AuthActionsType = SetAuthUserDataACType | SetCaptchaUrlACType;

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
    isAuth: false,
    captcha: null as string | null
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {
                ...state,
                ...action.payload,
            }
        case "SET-CAPTCHA-URL":
            return {
                ...state,
                captcha: action.url
            }
        default:
            return state;
    }
}

//AC
export const setAuthUserData = (payload: AuthRespType) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        payload
    } as const;
}
export const setCaptchaUrl = (url: string) => {
    return {
        type: 'SET-CAPTCHA-URL',
        url
    } as const;
}

//thunk
export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authApi.authMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                const {email, id, login} = res.data.data;
                dispatch(setAuthUserData({email, login, userId: id, isAuth: true}));
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string = null) => async (dispatch: Dispatch) => {
    const res = await authApi.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        // @ts-ignore
        dispatch(getAuthUserData());
    } else {
        if (res.data.resultCode === 10) {
            // @ts-ignore
            dispatch(getCaptchaUrl());
        }
        const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error';
        const action = stopSubmit('login', {_error: message});
        dispatch(action)
    }

}
export const logOut = () => async (dispatch: Dispatch) => {
    const res = await authApi.logOut()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData({email: null, login: null, userId: null, isAuth: false}));
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const res = await securityApi.captchaUrl()
    const captchaUrl = res.data.url;
    dispatch(setCaptchaUrl(captchaUrl));
}

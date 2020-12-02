import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

type SetInitializedSuccessACType = ReturnType<typeof setInitializedSuccess>;

export type AppActionsType = SetInitializedSuccessACType;

type  AppStateType = typeof initialState;
const initialState = {
    initialized: false
}

export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case "SET-INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setInitializedSuccess = () => {
    return {
        type: 'SET-INITIALIZED-SUCCESS',
    } as const;
}

export const initializedApp = () => (dispatch: Dispatch) => {
    // @ts-ignore
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(setInitializedSuccess());
    })
}


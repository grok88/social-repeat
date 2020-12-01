import {PostType} from "../components/profile/my-posts/MyPosts";
import {Dispatch} from "redux";
import {getProfileRespType, profileAPI} from "../api/api";

type AddPostACType = ReturnType<typeof addPostAC>;
type GetProfileACType = ReturnType<typeof getProfileAC>;
type SetStatusACType = ReturnType<typeof setStatus>;

export type ProfileActionsType = AddPostACType | GetProfileACType | SetStatusACType;

type ProfileStateType = {
    posts: Array<PostType>
    profile: getProfileRespType | null
    status: string
}
const initialState: ProfileStateType = {
    posts: [
        {id: 1, message: 'This is Sparta', likesCount: 5},
        {id: 2, message: 'Wow, You are big', likesCount: 6},
        {id: 3, message: 'Wow, I am good', likesCount: 7},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts.map(p => ({...p}))]
            }
        case "GET-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

//actions
export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText
    } as const;
}
export const getProfileAC = (profile: getProfileRespType) => {
    return {type: 'GET-PROFILE', profile} as const;
}
export const setStatus = (status: string) => {
    return {type: 'SET-STATUS', status} as const;
}

// thunks
export const getProfile = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(res => {
            dispatch(getProfileAC(res.data));
        })
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setStatus(res.data));
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

import {PostType} from "../components/profile/my-posts/MyPosts";
import {Dispatch} from "redux";
import {getProfileRespType, profileAPI} from "../api/api";
import {AppRootStateType} from "./redux-store";

type AddPostACType = ReturnType<typeof addPostAC>;
type GetProfileACType = ReturnType<typeof getProfileAC>;
type SetStatusACType = ReturnType<typeof setStatus>;
type DeletePostACType = ReturnType<typeof deleteAC>;
type SavePhotoSuccessACType = ReturnType<typeof savePhotoSuccess>;

export type ProfileActionsType =
    AddPostACType
    | GetProfileACType
    | SetStatusACType
    | DeletePostACType
    | SavePhotoSuccessACType;

export type ProfileStateType = {
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
        case "DELETE-POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
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
        case "SAVE-PHOTO-SUCCESS":
            return {
                ...state,
                profile: action.profile
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
export const deleteAC = (postId: number) => {
    return {
        type: 'DELETE-POST',
        postId
    } as const;
}
export const getProfileAC = (profile: getProfileRespType) => {
    return {type: 'GET-PROFILE', profile} as const;
}
export const setStatus = (status: string) => {
    return {type: 'SET-STATUS', status} as const;
}
export const savePhotoSuccess = (profile: getProfileRespType) => {
    return {type: 'SAVE-PHOTO-SUCCESS', profile} as const;
}

// thunks
export const getProfile = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getProfile(userId)
    dispatch(getProfileAC(res.data));
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data));

}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const saveFile = (file: any) => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const res = await profileAPI.savePhoto(file);
    if (res.data.resultCode === 0) {
        const profile = getState().profilePage.profile;
        console.log('SUCCESS');
        profile && dispatch(savePhotoSuccess({...profile, photos: res.data.data.photos}));
    }
}


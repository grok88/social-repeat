import {PostType} from "../components/profile/my-posts/MyPosts";
import { getProfileRespType } from "../components/profile/ProfileContainer";

type AddPostACType = ReturnType<typeof addPostAC>;
type UpdatePostACType = ReturnType<typeof updatePostAC>;
type GetProfileACType = ReturnType<typeof getProfile>;
export type ProfileActionsType = AddPostACType | UpdatePostACType | GetProfileACType;

type ProfileStateType = {
    posts: Array<PostType>
    newPostText: string
    profile:getProfileRespType | null
}
const initialState: ProfileStateType = {
    posts: [
        {id: 1, message: 'This is Sparta', likesCount: 5},
        {id: 2, message: 'Wow, You are big', likesCount: 6},
        {id: 3, message: 'Wow, I am good', likesCount: 7},
    ],
    newPostText: '',
    profile:null
}

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts.map(p => ({...p}))],
                newPostText: ''
            }
        case 'UPDATE-POST':
            return {
                ...state,
                newPostText: action.message as string
            }
        case "GET-PROFILE":
            return {
                ...state,
                profile:action.profile
            }
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const;
}
export const updatePostAC = (message: string | null) => {
    return {type: 'UPDATE-POST', message} as const;
}
export const getProfile = (profile:getProfileRespType) => {
    return {type: 'GET-PROFILE', profile} as const;
}

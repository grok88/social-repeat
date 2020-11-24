import {PostType} from "../components/profile/my-posts/MyPosts";

type AddPostACType = ReturnType<typeof addPostAC>;
type UpdatePostACType = ReturnType<typeof updatePostAC>;
export type ProfileActionsType = AddPostACType | UpdatePostACType

type ProfileStateType = {
    posts: Array<PostType>
    newPostText: string
}
const initialState:ProfileStateType = {
    posts: [
        {id: 1, message: 'This is Sparta', likesCount: 5},
        {id: 2, message: 'Wow, You are big', likesCount: 6},
        {id: 3, message: 'Wow, I am good', likesCount: 7},
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-POST':
            // @ts-ignore
            state.newPostText = action.message;
            return state;
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

import {PostType} from "../components/profile/my-posts/MyPosts";

type AddPostACType = ReturnType<typeof addPostAC>;
type UpdatePostACType = ReturnType<typeof updatePostAC>;
export type ProfileActionsType = AddPostACType | UpdatePostACType

type ProfileStateType = {
    posts: Array<PostType>
    newPostText: string
}

export const profileReducer = (state: ProfileStateType, action: ProfileActionsType): ProfileStateType => {
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

import {PostType} from "../components/profile/my-posts/MyPosts";
import {rerenderEntireTree} from "../render";

export const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'This is Sparta', likesCount: 5},
            {id: 2, message: 'Wow, You are big', likesCount: 6},
            {id: 3, message: 'Wow, I am good', likesCount: 7},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Sergey'},
            {id: 4, name: 'Tanya'},
        ],
        messages: [
            {id: 1, message: 'This is Sparta!'},
            {id: 2, message: 'I likes WoW'},
            {id: 3, message: 'I want to see a mountain'},
        ]
    }
}

export const addPost = (postMessage: string | null) => {
    const newPost: PostType = {
        id: state.profilePage.posts.length + 1,
        message: postMessage,
        likesCount: 0
    };
    // @ts-ignore
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

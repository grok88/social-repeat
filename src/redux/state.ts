import {PostType} from "../components/profile/my-posts/MyPosts";

let  rerenderEntireTree = (state:any) => {
    console.log('Rerender');
}

export const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'This is Sparta', likesCount: 5},
            {id: 2, message: 'Wow, You are big', likesCount: 6},
            {id: 3, message: 'Wow, I am good', likesCount: 7},
        ],
        newPostText: ''
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

export const addPost = () => {

    const newPost: PostType = {
        id: state.profilePage.posts.length + 1,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updatePost = (message: string | null) => {
    // @ts-ignore
    state.profilePage.newPostText = message;
    rerenderEntireTree(state);
}

export const subscribe = (observer:any) => {
    rerenderEntireTree = observer;
}

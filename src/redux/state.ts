import {PostType} from "../components/profile/my-posts/MyPosts";


export const store = {
    _state: {
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
    },
    _callSubscriber(state: any) {
        console.log('Rerender');
    },
    getstate() {
        return this._state;
    },
    addPost() {
        const newPost: PostType = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updatePost(message: string | null) {
        // @ts-ignore
        this._state.profilePage.newPostText = message;
        this._callSubscriber(this._state);
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    }
}





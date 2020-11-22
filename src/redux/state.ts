import {PostType} from "../components/profile/my-posts/MyPosts";
import {DialogType, MessageType} from "../components/dialogs/Dialogs";

export type StateType = {
    profilePage:{
        posts:Array<PostType>
        newPostText:string
    }
    dialogsPage:{
        dialogs:Array<DialogType>
        messages: Array<MessageType>
        newMessText: string
    }
}

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
            ],
            newMessText: ''
        }
    },
    _callSubscriber(state: any) {
        console.log('Rerender');
    },

    getstate() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionsType) {
        switch (action.type) {
            case 'ADD-POST':
                const newPost: PostType = {
                    id: this._state.profilePage.posts.length + 1,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };

                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case 'UPDATE-POST':
                // @ts-ignore
                this._state.profilePage.newPostText = action.message;
                this._callSubscriber(this._state);
                break;
            case 'ADD-MESSAGE':
                const newMess = {
                    id: this._state.dialogsPage.messages.length + 1,
                    message: this._state.dialogsPage.newMessText
                }
                this._state.dialogsPage.messages.push(newMess);
                this._state.dialogsPage.newMessText = '';
                this._callSubscriber(this._state);
                break;
            case 'UPDATE-MESSAGE':
                // @ts-ignore
                this._state.dialogsPage.newMessText = action.value;
                this._callSubscriber(this._state);
                break;
        }
    }
}

type AddPostACType = ReturnType<typeof addPostAC>;
type UpdatePostACType = ReturnType<typeof updatePostAC>;
type AddMessageACType = ReturnType<typeof addMessageAC>;
type UpdateMessageACType = ReturnType<typeof updateMessageAC>;

 export type ActionsType = AddPostACType | UpdatePostACType | AddMessageACType | UpdateMessageACType;

//actions
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const;
}
export const updatePostAC = (message: string | null) => {
    return {type: 'UPDATE-POST', message} as const;
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const;
}
export const updateMessageAC = (value: string) => {
    return {
        type: 'UPDATE-MESSAGE',
        value
    } as const;
}

// @ts-ignore
window.store = store;

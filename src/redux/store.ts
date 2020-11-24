import {PostType} from "../components/profile/my-posts/MyPosts";
import {DialogType, MessageType} from "../components/dialogs/Dialogs";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {ProfileActionsType, profileReducer} from "./profile-reducer";

export type StateType = {
    profilePage: {
        posts: Array<PostType>
        newPostText: string
    }
    dialogsPage: {
        dialogs: Array<DialogType>
        messages: Array<MessageType>
        newMessText: string
    }
}
export type ActionsType = DialogsActionsType | ProfileActionsType;

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

    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}
// @ts-ignore
window.store = store;

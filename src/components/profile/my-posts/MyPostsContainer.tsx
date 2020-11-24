import React, {useRef} from 'react';
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type MyPostsContainerPropsType = {
    store: any
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
    const state: AppRootStateType = props.store.getState();

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        props.store.dispatch(addPostAC());
    }

    const updatePost = (text: string | null) => {
        props.store.dispatch(updatePostAC(text));
    }

    return <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPost}
                    updatePost={updatePost}/>;
};

export default MyPostsContainer;

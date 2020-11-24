import React from 'react';
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";
import {StoreContext} from '././../../../index';


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type MyPostsContainerPropsType = {
    // store: any
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {


    return <StoreContext.Consumer>
        {
            store => {
                const state: AppRootStateType = store.getState();
                const addPost = () => {
                    store.dispatch(addPostAC());
                }

                const updatePost = (text: string | null) => {
                    store.dispatch(updatePostAC(text));
                }
                return <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}
                                addPost={addPost}
                                updatePost={updatePost}/>;
            }
        }
    </StoreContext.Consumer>


};

export default MyPostsContainer;

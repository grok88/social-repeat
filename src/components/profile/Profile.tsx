import React from 'react';
import MyPosts, {PostType} from './my-posts/MyPosts';
import styles from './Profile.module.css'
import ProfileInfo from "./prodile-info/ProfileInfo";
import {ActionsType} from "../../redux/store";

type ProfilePropsType = {
    data: {
        posts: Array<PostType>
        newPostText: string
    }
    dispatch: (action: ActionsType) => void;
}

const Profile: React.FC<ProfilePropsType> = ({data: {posts, newPostText}, dispatch}) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     newPostText={newPostText}
                     dispatch={dispatch}
            />
        </div>
    );
};

export default Profile;

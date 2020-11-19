import React from 'react';
import MyPosts, {PostType} from './my-posts/MyPosts';
import styles from './Profile.module.css'
import ProfileInfo from "./prodile-info/ProfileInfo";
import {addPost} from "../../redux/state";

type ProfilePropsType = {
    data: {
        posts: Array<PostType>
    }
    addPost : (postMessage:string | null) => void;
}

const Profile: React.FC<ProfilePropsType> = ({data: {posts}}) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    );
};

export default Profile;

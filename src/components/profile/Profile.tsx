import React from 'react';
import MyPosts, {PostType} from './my-posts/MyPosts';
import styles from './Profile.module.css'
import ProfileInfo from "./prodile-info/ProfileInfo";

type ProfilePropsType = {
    data: {
        posts: Array<PostType>
        newPostText:string
    }
    addPost : () => void;
    updatePost:(message:string  | null) => void
}

const Profile: React.FC<ProfilePropsType> = ({data: {posts,newPostText},addPost,updatePost}) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     newPostText={newPostText}
                     addPost={addPost}
                     updatePost={updatePost}
            />
        </div>
    );
};

export default Profile;

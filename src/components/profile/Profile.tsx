import React from 'react';
import MyPosts, {PostType} from './my-posts/MyPosts';
import styles from './Profile.module.css'
import ProfileInfo from "./prodile-info/ProfileInfo";

type ProfilePropsType = {
    data: {
        posts: Array<PostType>
    }
}

const Profile: React.FC<ProfilePropsType> = ({data: {posts}}) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;

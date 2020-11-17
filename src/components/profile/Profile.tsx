import React from 'react';
import MyPosts, {MyPostsPropsType} from './my-posts/MyPosts';
import styles from './Profile.module.css'
import ProfileInfo from "./prodile-info/ProfileInfo";



const Profile:React.FC<MyPostsPropsType> = ({posts}) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;

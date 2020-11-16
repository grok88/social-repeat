import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.myPostsBlock}>
            my Posts
            <div>
                <textarea></textarea>
                <button>add Post</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default MyPosts;

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
            <Post message={'This is Sparta'} like={5}/>
            <Post message={'Wow, You are big'} like={6}/>
            <Post message={'Wow, I am good'} like={7}/>
        </div>
    );
};

export default MyPosts;

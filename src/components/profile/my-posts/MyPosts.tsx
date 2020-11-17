import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    const posts = [
        {id: 1, message: 'This is Sparta', likesCount: 5},
        {id: 2, message: 'Wow, You are big', likesCount: 6},
        {id: 3, message: 'Wow, I am good', likesCount: 7},

    ];
    return (
        <div className={styles.myPostsBlock}>
            my Posts
            <div>
                <textarea></textarea>
                <button>add Post</button>
            </div>
            {
                posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)
            }
        </div>
    );
};

export default MyPosts;

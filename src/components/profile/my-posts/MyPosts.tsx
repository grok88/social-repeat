import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

export type PostType = {
    id:number
    message:string
    likesCount:number
}
export type MyPostsPropsType = {
    posts : Array<PostType>
}

const MyPosts:React.FC<MyPostsPropsType> = ({posts}) => {

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

import React, {useRef} from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts}) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        const text = textAreaRef && textAreaRef.current && textAreaRef.current.value;
        alert(text);
    }

    return (
        <div className={styles.myPostsBlock}>
            my Posts
            <div>
                <textarea ref={textAreaRef}></textarea>
                <button onClick={addPost}>add Post</button>
            </div>
            {
                posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)
            }
        </div>
    );
};

export default MyPosts;

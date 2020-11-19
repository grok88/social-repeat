import React, {useRef} from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

export type PostType = {
    id: number
    message: string | null
    likesCount: number
}
export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost : (postMessage:string | null) => void;
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        let text = textAreaRef && textAreaRef.current && textAreaRef.current.value;
        props.addPost(text);
    }

    return (
        <div className={styles.myPostsBlock}>
            my Posts
            <div>
                <textarea ref={textAreaRef}></textarea>
                <button onClick={addPost}>add Post</button>
            </div>
            {
                props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)
            }
        </div>
    );
};

export default MyPosts;

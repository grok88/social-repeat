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
    addPost: () => void;
    newPostText:string
    updatePost:(message:string  | null) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        props.addPost();
    }

    const updatePost = () => {
        let text = textAreaRef && textAreaRef.current && textAreaRef.current.value;
        if (textAreaRef && textAreaRef.current) {
            props.updatePost(text );
        }

    }
    return (
        <div className={styles.myPostsBlock}>
            my Posts
            <div>
                <textarea ref={textAreaRef} value={props.newPostText} onChange={updatePost}></textarea>
                <button onClick={addPost}>add Post</button>
            </div>
            {
                props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)
            }
        </div>
    );
};

export default MyPosts;

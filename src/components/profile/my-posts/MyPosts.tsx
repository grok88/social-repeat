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
    newPostText: string
    dispatch: (action: any) => void;

}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    const updatePost = () => {
        let text = textAreaRef && textAreaRef.current && textAreaRef.current.value;
        if (textAreaRef && textAreaRef.current) {
            props.dispatch({type: 'UPDATE-POST', message: text});
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

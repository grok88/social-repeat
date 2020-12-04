import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthValidator, required} from '../../../utils/validator/validator';
import {Textarea} from '../../common/formsControls/formsControls';

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

//validate form field
const maxLength10 = maxLengthValidator(10);


const MyPosts = React.memo((props: MyPostsPropsType) => {
    console.log('My POSTS')

    const onAddPost = (values: FormDataType) => {
        console.log(values)
        props.addPost(values.newPostText);
    }

    return (
        <div className={styles.myPostsBlock}>
            my Posts
            {
                props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)
            }
            <MyPostReduxForm onSubmit={onAddPost}/>
        </div>
    );
})

type FormDataType = {
    newPostText: string
}

const MyPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} placeholder={'Enter new message'} name={'newPostText'}
               validate={[required, maxLength10,]}></Field>
        <button type={'submit'}>add Post</button>
    </form>
}

const MyPostReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'appPostMessageForm'
})(MyPostForm)

export default MyPosts;

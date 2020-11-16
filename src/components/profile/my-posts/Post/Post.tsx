import React from 'react';
import styles from './Post.module.css'

type PostPropsType = {
    message: string
    like: number
}
const Post: React.FC<PostPropsType> = ({message, like}) => {
    return (
        <div className={styles.item}>
            <img
                src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                className={styles.img}/>
            {message}
            <div>
                <span>{like} like</span>
            </div>
        </div>
    );
};

export default Post;

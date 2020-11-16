import React from 'react';
import styles from './Post.module.css'

const Post = () => {
    return (
        <div className={styles.item}>
            <img src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" className={styles.img}/>
            Post 1
            <span>5 like</span>
        </div>
    );
};

export default Post;

import React from "react";
import styles from './formsControls.module.css'

export const Textarea = ({input, meta, ...props}:any) => {
    const hasError = meta.touched && meta.error;
    return <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
        <div>
            <textarea { ...input} {...props}/>
        </div>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </div>
}
export const Input = ({input, meta, ...props}:any) => {
    const hasError = meta.touched && meta.error;
    return <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
        <div>
            <input { ...input} {...props}/>
        </div>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </div>
}
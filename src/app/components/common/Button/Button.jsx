import React from 'react';
import styles from './Button.module.scss';

export default function Button({ variant = 'default', onClick, children, ...props }) {
    const cls = [styles.button, styles[variant]].join(' ');
    return (
        <button className={cls} onClick={onClick} {...props}>
            {children}
        </button>
    );
}
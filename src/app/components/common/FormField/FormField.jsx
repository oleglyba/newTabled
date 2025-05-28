import React from 'react';
import styles from './FormField.module.scss';

export default function FormField({ label, htmlFor, children }) {
    return (
        <div className={styles.field}>
            <label htmlFor={htmlFor} className={styles.label}>{label}</label>
            {children}
        </div>
    );
}

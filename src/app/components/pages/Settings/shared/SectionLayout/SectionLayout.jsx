'use client';
import React from 'react';
import styles from './SectionLayout.module.scss';

export default function SectionLayout({ title, description, rightSlot = null, children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.titleBlock}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
                {rightSlot && <div>{rightSlot}</div>}
            </div>
            <div className={styles.divider} />
            {children}
        </div>
    );
}

// PlanCard.jsx
'use client';
import React from 'react';
import styles from './PlanCard.module.scss';

export default function PlanCard({
                                     name,
                                     price,
                                     note,
                                     features = [],
                                     buttonText,
                                     selected = false,
                                     tag = null,
                                     onClick,
                                 }) {
    const isPro = name === 'Pro Plan';
    return (
        <div
            className={`${styles.card} ${selected ? styles.selected : ''} ${
                isPro ? styles.darkCard : ''
            }`}
        >
            {tag && (
                <div className={styles.tag}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.iconWrapper}>
                            <div className={styles.iconBody}>
                                <div className={styles.icon} />
                            </div>
                        </div>
                        <div className={styles.tagTextWrapper}>
                            <span className={styles.tagText}>{tag}</span>
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.top}>
                <div className={styles.name}>{name}</div>
                <div className={styles.priceRow}>
                    <div className={styles.price}>{price}</div>
                </div>
                {note && <div className={styles.note}>{note}</div>}
                <button className={styles.button} onClick={onClick}>
                    {buttonText}
                </button>
            </div>

            <div className={styles.divider} />

            <div className={styles.features}>
                {features.map((item, index) => (
                    <div key={index} className={styles.feature}>
                        <span className={styles.check}>✔</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
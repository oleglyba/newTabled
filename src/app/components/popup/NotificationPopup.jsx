'use client';
import React from 'react';
import styles from './NotificationPopup.module.scss';

export default function NotificationPopup() {
    return (
        <div className={styles.notificationPopup}>
            {/* Scrollbar */}
            <div className={styles.scrollbar}>
                <div className={styles.indicator} />
                <div className={styles.background} />
            </div>

            {/* Notifications List */}
            <div className={styles.list}>
                {/* Item 1 */}
                <div className={styles.notificationItem}>
                    <div className={styles.avatar}>
                        <div className={styles.picture} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.topLine}>
                            <div className={styles.notificationTitle}>
                                Bruce Banner | Videographer &amp; Editor | 5.0
                            </div>
                            <div className={styles.lastTimeIndicator}>
                                <span className={styles.value}>Now</span>
                            </div>
                            <div className={styles.notificationIndicator}>
                                <div className={styles.label}>
                                    <span className={styles.text}>+1</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.lastMessage}>
                            👋 Hello, my name is Mark, and I’m a professional videographer and social media strategist with a passion…
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className={styles.notificationItem}>
                    <div className={styles.avatar}>
                        <div className={styles.picture} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.topLine}>
                            <div className={styles.notificationTitle}>
                                Natasha Romanoff | Videographer | 4.9
                            </div>
                            <div className={styles.lastTimeIndicator}>
                                <span className={styles.value}>5 min ago</span>
                            </div>
                        </div>
                        <div className={styles.lastMessage}>
                            👋 Hi there, I’m Natsha, a dedicated food and lifestyle content creator with over five years of experience…
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className={styles.notificationItem}>
                    <div className={styles.icon} /> {/* Job-folder icon */}
                    <div className={styles.content}>
                        <div className={styles.topLine}>
                            <div className={styles.notificationTitle}>Creator Applied to Job</div>
                            <div className={styles.lastTimeIndicator}>
                                <span className={styles.value}>12 min ago</span>
                            </div>
                        </div>
                        <div className={styles.lastMessage}>
                            Elena Rossi applied to your Job #22 – Menu Video Shoot.
                        </div>
                    </div>
                </div>

                {/* Item 4 */}
                <div className={styles.notificationItem}>
                    <div className={styles.icon} /> {/* Status-change icon */}
                    <div className={styles.content}>
                        <div className={styles.topLine}>
                            <div className={styles.notificationTitle}>Job Status Changed</div>
                            <div className={styles.lastTimeIndicator}>
                                <span className={styles.value}>07/03/2025</span>
                            </div>
                        </div>
                        <div className={styles.lastMessage}>
                            A creator marked Job #12 as “To Review”. Please review the deliverables.
                        </div>
                    </div>
                </div>
            </div>

            {/* Item 4 */}


            {/* Divider */}
            <div className={styles.divider} />

            {/* Actions */}
            <div className={styles.actions}>
                <button className={styles.tertiaryButton}>
                    <div className={styles.buttonText}>
                        <span className={styles.text}>Clear All</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
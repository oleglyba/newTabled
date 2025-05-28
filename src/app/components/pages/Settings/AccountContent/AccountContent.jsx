// src/components/AccountContent/AccountContent.jsx
import React, { useState } from 'react';
import SectionLayout from '../shared/SectionLayout/SectionLayout';
import { Trash2 } from 'lucide-react';
import styles from './AccountContent.module.scss';
import EditAvatar from '/public/account/editAvatar.svg';
import DeleteAccountModal from "@/app/components/modals/DeleteAccountModal/DeleteAccountModal";

export default function AccountContent() {
    const [inAppNotif, setInAppNotif] = useState(true);
    const [emailNotif, setEmailNotif] = useState(true);
    const [announceNotif, setAnnounceNotif] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const Toggle = ({ value, onChange }) => (
        <button
            type="button"
            className={`${styles.toggle} ${value ? styles.on : styles.off}`}
            onClick={() => onChange(!value)}
            aria-pressed={value}
        >
            <div className={styles.knob} />
        </button>
    );

    const avatarUrl = '/path/to/avatar.jpg';

    const handleConfirmDelete = () => {
        // тут можна викликати API для видалення акаунту
        console.log('Account deleted');
        setShowModal(false);
    };

    return (
        <SectionLayout
            title="Account"
            description="Manage your account details, login credentials, and notification preferences."
        >
            <div className={styles.contentArea}>

                {/* Profile Info */}
                <div className={styles.profileInfo}>
                    {/* Image + Edit */}
                    <div className={styles.infoRow}>
                        <div className={styles.label}>Image</div>
                        <div className={styles.avatarWrapper}>
                            <img src={avatarUrl} alt="Profile" className={styles.avatarImage} />
                            <button className={styles.editButton}>
                                <div className={styles.iconWrapper}>
                                    <EditAvatar />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Full Name */}
                    <div className={styles.infoRow}>
                        <div className={styles.label}>Full Name</div>
                        <input
                            type="text"
                            defaultValue="Tony Stark"
                            className={styles.inputField}
                        />
                    </div>

                    {/* Phone Number */}
                    <div className={styles.infoRow}>
                        <div className={styles.label}>Phone Number</div>
                        <input
                            type="tel"
                            defaultValue="212-111-2222"
                            className={styles.inputField}
                        />
                    </div>

                    {/* Email */}
                    <div className={styles.infoRow}>
                        <div className={styles.label}>Email</div>
                        <input
                            type="email"
                            defaultValue="ironman2008@gmail.com"
                            className={styles.inputField}
                        />
                    </div>

                    {/* Password */}
                    <div className={styles.infoRow}>
                        <div className={styles.label}>Password</div>
                        <button className={styles.changePassword}>Change Password</button>
                    </div>

                    {/* Language */}
                    <div className={styles.infoRow}>
                        <div className={styles.label}>Language</div>
                        <select defaultValue="en" className={styles.selectField}>
                            <option value="en">English</option>
                            <option value="uk">Українська</option>
                        </select>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* Notifications */}
                <div className={styles.notifications}>
                    <div className={styles.infoRow}>
                        <div>
                            <div className={styles.label}>In App Notifications</div>
                            <div className={styles.description}>
                                Receive alerts and updates directly in the app.
                            </div>
                        </div>
                        <Toggle value={inAppNotif} onChange={setInAppNotif} />
                    </div>

                    <div className={styles.infoRow}>
                        <div>
                            <div className={styles.label}>Email Notifications</div>
                            <div className={styles.description}>
                                Get updates and activity summaries via email.
                            </div>
                        </div>
                        <Toggle value={emailNotif} onChange={setEmailNotif} />
                    </div>

                    <div className={styles.infoRow}>
                        <div>
                            <div className={styles.label}>Announcements and Update Emails</div>
                            <div className={styles.description}>
                                Stay informed about new features and platform updates.
                            </div>
                        </div>
                        <Toggle value={announceNotif} onChange={setAnnounceNotif} />
                    </div>
                </div>

                <div className={styles.divider} />

                {/* Delete Account */}
                <div className={styles.deleteRow}>
                    <div>
                        <div className={styles.label}>Delete Account</div>
                        <div className={styles.description}>
                            Permanently delete the account and remove access from all users.
                        </div>
                    </div>
                    <button
                        type="button"
                        className={styles.deleteButton}
                        onClick={() => setShowModal(true)}
                    >
                        <Trash2 size={18} strokeWidth={1.5} className={styles.deleteIcon} />
                        <span className={styles.deleteText}>Delete</span>
                    </button>
                </div>
            </div>

            {/* Подключаємо модалку */}
            <DeleteAccountModal
                isOpen={showModal}
                onCancel={() => setShowModal(false)}
                onConfirm={handleConfirmDelete}
            />
        </SectionLayout>
    );
}

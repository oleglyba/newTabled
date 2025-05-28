'use client';

import React, { useState } from 'react';
import { X as CloseIcon } from 'lucide-react';

// SVG-іконки
import AccountIcon from '/public/settings/account.svg';
import UsersIcon   from '/public/settings/users.svg';
import BillingIcon from '/public/settings/biling.svg';
import PlanIcon    from '/public/settings/plan.svg';

import styles from './page.module.scss';
import AccountContent from "@/app/components/pages/Settings/AccountContent/AccountContent";
import UsersContent from "@/app/components/pages/Settings/UsersContent/UsersContent";
import BillingContent from "@/app/components/pages/Settings/BillingContent/BillingContent";
import PlanContent from "@/app/components/pages/Settings/PlanContent/PlanContent";


const TABS = [
    { id: 'account', label: 'Account',           Icon: AccountIcon, Content: AccountContent },
    { id: 'users',   label: 'Users',             Icon: UsersIcon,   Content: UsersContent   },
    { id: 'billing', label: 'Billing',           Icon: BillingIcon, Content: BillingContent },
    { id: 'plan',    label: 'Subscription Plan', Icon: PlanIcon,    Content: PlanContent    },
];

export default function SettingsModal({ isOpen, onClose }) {
    const [active, setActive] = useState('account');
    if (!isOpen) return null;

    const ActivePane = TABS.find(t => t.id === active).Content;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Settings</h2>
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                        <CloseIcon />
                    </button>
                </header>

                <div className={styles.body}>
                    <nav className={styles.nav}>
                        {TABS.map(({ id, label, Icon }) => (
                            <button
                                key={id}
                                className={`${styles.tab} ${active === id ? styles.active : ''}`}
                                onClick={() => setActive(id)}
                            >
                                <Icon
                                    className={`${styles.tabIcon} ${active === id ? styles.activeIcon : ''}`}
                                />
                                <span className={styles.tabText}>{label}</span>
                            </button>
                        ))}
                    </nav>

                    <section className={styles.content}>
                        <ActivePane />
                    </section>
                </div>
            </div>
        </div>
    );
}

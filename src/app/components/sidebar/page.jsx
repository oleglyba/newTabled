'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './page.module.scss';

import ChevronIcon from '../../../../public/sidebar/chevron.svg';
import DashboardIcon from '../../../../public/sidebar/dashboard.svg';
import LocationsIcon from '../../../../public/sidebar/locations.svg';
import MenusIcon from '../../../../public/sidebar/menus.svg';
import CreatorsIcon from '../../../../public/sidebar/creators.svg';
import LibraryIcon from '../../../../public/sidebar/library.svg';
import NotificationsIcon from '../../../../public/sidebar/notifications.svg';
import FAQIcon from '../../../../public/sidebar/faq.svg';

import { ChevronDown as ThinChevronDown, MoreVertical, Settings, LogOut } from 'lucide-react';
import SettingsModal from "@/app/components/pages/Settings/SettingsModals/SettingsModal";
import NotificationPopup from "@/app/components/popup/NotificationPopup";

const mainNav = [
    { label: 'Dashboard', href: '/dashboard', Icon: DashboardIcon },
    { label: 'Locations', href: '/locations', Icon: LocationsIcon },
    { label: 'Menus', href: '/menus', Icon: MenusIcon },
    { label: 'Creators Hub', href: '/creators', Icon: CreatorsIcon, hasSub: true },
    { label: 'Content Library', href: '/library', Icon: LibraryIcon },
];

const bottomNav = [
    { label: 'Notifications', Icon: NotificationsIcon },
    { label: 'FAQ', href: '/faq', Icon: FAQIcon },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed]           = useState(false);
    const [openSub, setOpenSub]               = useState({});
    const [dropdownOpen, setDropdownOpen]     = useState(false);
    const [showSettings, setShowSettings]     = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.logoSection}>
                    <span className={styles.logo}>Tabled</span>
                    <span className={styles.subtitle}>Management system</span>
                </div>
                <button
                    className={styles.toggleButton}
                    aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    onClick={() => setCollapsed(c => !c)}
                >
                    <ChevronIcon
                        className={styles.toggleIcon}
                        style={{ transform: collapsed ? 'rotate(180deg)' : 'none' }}
                    />
                </button>
            </div>

            <div className={styles.divider} />

            {/* Main navigation */}
            <nav className={styles.menu}>
                {mainNav.map(({ label, href, Icon, hasSub }) => {
                    // Оновлено: якщо показані Notifications — mainNav не активні
                    const isActive = !showNotifications && pathname.startsWith(href);
                    const isOpen   = !!openSub[label];
                    return (
                        <Link
                            key={label}
                            href={href}
                            className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
                        >
                            <Icon className={`${styles.icon} ${isActive ? styles.activeIcon : ''}`} />
                            <span>{label}</span>
                            {hasSub && (
                                <ThinChevronDown
                                    className={styles.subIcon}
                                    style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenSub(s => ({ ...s, [label]: !s[label] }));
                                    }}
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className={styles.divider} />

            {/* Bottom navigation */}
            <nav className={styles.bottomMenu}>
                {bottomNav.map(({ label, href, Icon }) => {
                    if (label === 'Notifications') {
                        const isNotifActive = showNotifications;
                        return (
                            <button
                                key={label}
                                onClick={() => setShowNotifications(v => !v)}
                                className={`${styles.menuItem} ${isNotifActive ? styles.active : ''}`}
                            >
                                <Icon className={`${styles.icon} ${isNotifActive ? styles.activeIcon : ''}`} />
                                <span>{label}</span>
                            </button>
                        );
                    }
                    // Оновлено: FAQ не активна, коли Notifications відкриті
                    const isActive = !showNotifications && pathname.startsWith(href || '');
                    return (
                        <Link
                            key={label}
                            href={href}
                            className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
                        >
                            <Icon className={`${styles.icon} ${isActive ? styles.activeIcon : ''}`} />
                            <span>{label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Profile */}
            <div className={styles.profile}>
                <div className={styles.profileLeft}>
                    <img src="/sidebar/avatar.svg" alt="Tony Stark" className={styles.avatar} />
                    <div className={styles.profileInfo}>
                        <div className={styles.name}>Tony Stark</div>
                        <div className={styles.role}>Restaurant Owner</div>
                    </div>
                </div>
                <button
                    className={styles.moreButton}
                    aria-label="More options"
                    onClick={() => setDropdownOpen(o => !o)}
                >
                    <MoreVertical size={18} strokeWidth={1} color="#737373" />
                </button>
                {dropdownOpen && (
                    <div className={styles.dropdown}>
                        <div
                            className={styles.dropdownItem}
                            onClick={() => {
                                setShowSettings(true);
                                setDropdownOpen(false);
                            }}
                        >
                            <Settings className={styles.dropdownItemIcon} size={20} strokeWidth={1.5} />
                            <span className={styles.dropdownItemLabel}>Settings</span>
                        </div>
                        <div className={`${styles.dropdownItem} ${styles.logout}`} onClick={() => {}}>
                            <LogOut className={styles.dropdownItemIcon} size={20} strokeWidth={1.5} />
                            <span className={styles.dropdownItemLabel}>Log Out</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Modals & Popups */}
            <SettingsModal
                isOpen={showSettings}
                onClose={() => setShowSettings(false)}
            />
            {showNotifications && (
                <NotificationPopup onClose={() => setShowNotifications(false)} />
            )}
        </aside>
    );
}

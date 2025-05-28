'use client';
import React from 'react';
import styles from './ModalWindow.module.scss';
import { X } from 'lucide-react';

export default function ModalWindow({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <div className={styles.modalName}>{title}</div>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={20} stroke="#737373" />
                    </button>
                </div>

                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}

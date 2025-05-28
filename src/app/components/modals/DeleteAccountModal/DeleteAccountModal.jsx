// File: src/components/DeleteAccountModal/DeleteAccountModal.jsx
import React from 'react';
import Modal from '@/app/components/common/Modal/Modal';
import Button from '@/app/components/common/Button/Button';
import styles from './DeleteAccountModal.module.scss';
export default function DeleteAccountModal({ isOpen, onCancel, onConfirm }) {
    const footer = (
        <>
            <Button onClick={onCancel}>Cancel</Button>
            <Button variant="danger" onClick={onConfirm}>Delete</Button>
        </>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onCancel}
            title="Delete Account"
            footer={footer}
        >
            <p className={styles.message}>
                Are you sure you want to permanently delete your account? This action cannot be undone and will remove
                all your data, locations, menus, and user access.
            </p>
        </Modal>
    );
}

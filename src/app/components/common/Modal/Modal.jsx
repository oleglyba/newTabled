import React from 'react';
import { X as CloseIcon } from 'lucide-react';
import styles from './Modal.module.scss';

export default function Modal({ isOpen, onClose, title, children, footer }) {
    if (!isOpen) return null;
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {title && (
                    <div className={styles.header}>
                        <h2 className={styles.title}>{title}</h2>
                        <button
                            type="button"
                            className={styles.closeBtn}
                            onClick={onClose}
                            aria-label="Close"
                        >
                            <CloseIcon size={20} />
                        </button>
                    </div>
                )}

                <div className={styles.content}>{children}</div>

                {footer && <div className={styles.footer}>{footer}</div>}
            </div>
        </div>
    );
}
'use client';

import React from 'react';
import styles from './BillingContent.module.scss';
import '@/app/style/_shared.scss';

import UpdateIcon from '/public/billing/updatePayment.svg';
import NoFoundIcon from '/public/billing/noFound.svg';
import useModal from "@/app/hook/useModal";
import UpdatePaymentModal from "@/app/components/modals/UpdatePaymentModal/UpdatePaymentModal";
import SectionLayout from "@/app/components/pages/Settings/shared/SectionLayout/SectionLayout";

export default function BillingContent() {
    // 🔧 Виклик хука ТУТ
    const { isOpen, open, close } = useModal();

    return (
        <SectionLayout
            title="Billing"
            description="Manage your payment details and track your billing history."
        >
            {/* Блок з інформацією про оплату */}
            <div className={styles.infoRow}>
                <div className={styles.textBlock}>
                    <div className={styles.infoTitle}>Payment Details</div>
                    <div className={styles.infoDescription}>
                        Update your billing details and address.
                    </div>
                </div>
                <button className={styles.tertiaryButton} onClick={open}>
                    <div className={styles.iconWrapper}>
                        <UpdateIcon className={styles.icon}/>
                    </div>
                    <span className={styles.buttonText}>Update Payment Details</span>
                </button>
            </div>

            {/* Modal */}
            <UpdatePaymentModal isOpen={isOpen} onClose={close} />

            {/* Роздільник */}
            <div className="divider"></div>

            {/* Billing History */}
            <div className={styles.historyTitle}>Billing History</div>
            <div className={styles.billingHistory}>
                <NoFoundIcon className={styles.iconNotFound} />
                <div className={styles.noInvoicesText}>No Invoices Found</div>
            </div>
        </SectionLayout>
    );
}

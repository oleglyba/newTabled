// File: src/components/UsersContent/UsersContent.jsx
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SectionLayout from '../shared/SectionLayout/SectionLayout';
import styles from './UsersContent.module.scss';
import InviteUserModal from "@/app/components/modals/InviteUserModal/InviteUserModal";

export default function UsersContent() {
    const [isInviteOpen, setIsInviteOpen] = useState(false);

    const openInvite = () => setIsInviteOpen(true);
    const closeInvite = () => setIsInviteOpen(false);

    const handleSendInvite = ({ email, role }) => {
        // TODO: implement invite API call
        console.log('Inviting user:', email, 'Role:', role);
        closeInvite();
    };

    return (
        <>
            <SectionLayout
                title="Manage Users"
                description="Invite teammates, assign roles, and manage access for your workspace."
                rightSlot={
                    <button className={styles.inviteBtn} onClick={openInvite}>
                        <Plus size={16} />
                        <span>Invite User</span>
                    </button>
                }
            >
                <div className={styles.emptyState}>
                    <img
                        src="/settings/empty-user.svg"
                        alt="No User Found"
                        width={32}
                        height={40}
                    />
                    <p className={styles.emptyText}>No User Found</p>
                </div>
            </SectionLayout>

            <InviteUserModal
                isOpen={isInviteOpen}
                onCancel={closeInvite}
                onSend={handleSendInvite}
            />
        </>
    );
}

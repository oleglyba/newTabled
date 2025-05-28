// File: src/components/InviteUserModal/InviteUserModal.jsx
import React, { useState } from 'react';
import Modal from '@/app/components/common/Modal/Modal';
import Button from '@/app/components/common/Button/Button';
import FormField from '@/app/components/common/FormField/FormField';

export default function InviteUserModal({ isOpen, onCancel, onSend, roles = [] }) {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleSend = () => onSend({ email, role });

    const footer = (
        <>
            <Button onClick={onCancel}>Cancel</Button>
            <Button variant="primary" onClick={handleSend} disabled={!email || !role}>
                Send Invite
            </Button>
        </>
    );

    return (
        <Modal isOpen={isOpen} onClose={onCancel} title="Invite User" footer={footer}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <FormField label="Email" htmlFor="invite-email">
                    <input
                        id="invite-email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormField>

                <FormField label="User Role" htmlFor="invite-role">
                    <select
                        id="invite-role"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                    >
                        <option value="" disabled>Select Role</option>
                        {roles.map(r => (
                            <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                    </select>
                </FormField>
            </div>
        </Modal>
    );
}

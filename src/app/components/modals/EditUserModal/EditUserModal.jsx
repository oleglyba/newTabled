// File: src/components/EditUserModal/EditUserModal.jsx
import React, { useState } from 'react';
import Modal from '@/app/components/common/Modal/Modal';
import Button from '@/app/components/common/Button/Button';
import FormField from '@/app/components/common/FormField/FormField';

export default function EditUserModal({
                                          isOpen,
                                          onCancel,
                                          onSave,
                                          roles = [],
                                          statuses = [],
                                          initialRole = '',
                                          initialStatus = ''
                                      }) {
    const [role, setRole] = useState(initialRole);
    const [status, setStatus] = useState(initialStatus);

    const handleSave = () => onSave({ role, status });

    const footer = (
        <>
            <Button onClick={onCancel}>Cancel</Button>
            <Button variant="primary" onClick={handleSave} disabled={!role || !status}>
                Save Changes
            </Button>
        </>
    );

    return (
        <Modal isOpen={isOpen} onClose={onCancel} title="Edit User" footer={footer}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <FormField label="User Role" htmlFor="edit-role">
                    <select
                        id="edit-role"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                    >
                        <option value="" disabled>Select Role</option>
                        {roles.map(r => (
                            <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                    </select>
                </FormField>

                <FormField label="Status" htmlFor="edit-status">
                    <select
                        id="edit-status"
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                    >
                        <option value="" disabled>Select Status</option>
                        {statuses.map(s => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                    </select>
                </FormField>
            </div>
        </Modal>
    );
}
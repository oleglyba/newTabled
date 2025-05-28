// File: src/components/UpdatePaymentModal/UpdatePaymentModal.jsx
import React, { useState } from 'react';
import Modal from '@/app/components/common/Modal/Modal';
import Button from '@/app/components/common/Button/Button';
import FormField from '@/app/components/common/FormField/FormField';

export default function UpdatePaymentModal({ isOpen, onClose, onSave }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const handleSave = () => {
        onSave({ cardNumber, expiry, cvc, address, country, city, zip });
        onClose();
    };

    const footer = (
        <>
            <Button onClick={onClose}>Cancel</Button>
            <Button
                variant="primary"
                onClick={handleSave}
                disabled={!(
                    cardNumber &&
                    expiry &&
                    cvc &&
                    address &&
                    country &&
                    city &&
                    zip
                )}
            >
                Save Changes
            </Button>
        </>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Update Payment Details"
            footer={footer}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <FormField label="Card Number">
                    <input
                        type="text"
                        placeholder="1234 5678 9101 1121"
                        value={cardNumber}
                        onChange={e => setCardNumber(e.target.value)}
                    />
                </FormField>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <FormField label="Expiration Date">
                        <input
                            type="text"
                            placeholder="MM/YY"
                            value={expiry}
                            onChange={e => setExpiry(e.target.value)}
                        />
                    </FormField>

                    <FormField label="Security Code">
                        <input
                            type="text"
                            placeholder="123"
                            value={cvc}
                            onChange={e => setCvc(e.target.value)}
                        />
                    </FormField>
                </div>

                <FormField label="Billing Address">
                    <input
                        type="text"
                        placeholder="Street address"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </FormField>

                <FormField label="Country">
                    <select value={country} onChange={e => setCountry(e.target.value)}>
                        <option value="" disabled>Select Country</option>
                        <option>United States</option>
                        <option>Ukraine</option>
                        <option>Germany</option>
                    </select>
                </FormField>

                <FormField label="City">
                    <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </FormField>

                <FormField label="Zip Code">
                    <input
                        type="text"
                        placeholder="Zip Code"
                        value={zip}
                        onChange={e => setZip(e.target.value)}
                    />
                </FormField>
            </div>
        </Modal>
    );
}

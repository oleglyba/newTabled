'use client';
import React from 'react';
import styles from './PlanContent.module.scss';
import SectionLayout from "@/app/components/pages/Settings/shared/SectionLayout/SectionLayout";
import PlanCard from "@/app/components/pages/Settings/shared/PlanCard/PlanCard";

const plans = [
    {
        name: 'Starter Plan',
        price: 'Free',
        note: '',
        features: ['1 menu', '1 restaurant / location', '1 user', '8 videos'],
        buttonText: 'Selected',
        selected: true,
        tag: 'Current',
    },
    {
        name: 'Basic Plan',
        price: '€ 45.00',
        features: [
            'All from Free plan',
            '3 menus',
            '3 users',
            '40 items with videos',
            'Remove Tabled branding',
            'AI menu upload',
        ],
        buttonText: 'Select Plan',
    },
    {
        name: 'Pro Plan',
        price: '€ 85.00',
        features: [
            'All from Basic plan',
            '2 restaurants / locations',
            'Custom branding',
            'Unlimited menus',
            '10 users',
            '80 items with video',
            'Add a 2nd video to an item',
        ],
        buttonText: 'Select Plan',
    },
    {
        name: 'Enterprise Plan',
        price: 'Custom',
        note: '',
        features: [
            'All from Pro plan',
            '3 or more restaurants / locations',
            '80+ items with video',
            'Priority support',
            'Custom functionalities',
        ],
        buttonText: 'Contact Us',
    },
];

export default function PlanContent() {
    return (
        <SectionLayout
            title="Subscription Plan"
            description="Compare plans and choose the one that fits your restaurant’s needs. Upgrade anytime to unlock more features, menus, and locations."
        >
            <div className={styles.plansWrapper}>
                {plans.map((plan, idx) => (
                    <PlanCard key={idx} {...plan} />
                ))}
            </div>
        </SectionLayout>
    );
}

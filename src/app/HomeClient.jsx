'use client';

import dynamic from 'next/dynamic';
import styles from './page.module.css';

const Sidebar = dynamic(
    () => import('@/app/components/Sidebar/Sidebar'),
    { ssr: false }
);

export default function HomeClient() {
    return (
        <div className={styles.page}>
            <Sidebar />
            {/* …other client-side widgets */}
        </div>
    );
}

'use client'

import React from 'react'
import styles from './page.module.scss'
import Sidebar from "@/app/components/Sidebar/Sidebar"; // Стилі для dashboard сторінки

const DashboardPage = () => {
    return (
        <div className={styles.page}>
            <Sidebar />
            <main className={styles.mainContent}>
                <h1>Dashboard</h1>
                <p>Welcome to the dashboard page!</p>
            </main>
        </div>
    )
}

export default DashboardPage

// src/app/page.js
import Sidebar from '@/app/components/Sidebar/Sidebar'
import styles from './page.module.css'

export default function Page() {
    return (
        <div className={styles.page}>
            <Sidebar />
            {/* ...ваш контент */}
        </div>
    )
}

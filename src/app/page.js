// src/app/page.js
import styles from './page.module.css'
import Sidebar from "@/app/components/sidebar/page";

export default function Page() {
    return (
        <div className={styles.page}>
            <Sidebar />
            {/* ...ваш контент */}
        </div>
    )
}

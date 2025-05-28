import React from 'react'
import styles from './page.module.scss'
import { HiChevronDown } from 'react-icons/hi'
import Sidebar from "@/app/components/sidebar/page";

// Список питань (може містити дублікати)
const QUESTIONS = [
    'What are Shot Types?',
    'How do I hire a content creator?',
    'What happens after I hire a creator?',
    'Can I edit or delete a job after posting it?',
    'How do payments work on the platform?',
    'What is the Content Library?',
    'How do I upload my own video content?',
    'What should I include in my job brief?',
    'Can I cancel a job after it’s in progress?',
    'How do I contact support if something goes wrong?',
    'What are Shot Types?',
    'What happens after I hire a creator?',
    'How do payments work on the platform?',
    'What should I include in my job brief?',
    'How do I hire a content creator?',
    'Can I edit or delete a job after posting it?',
    'Can I cancel a job after it’s in progress?'
]

// Відповіді по ключу питання
const ANSWERS = {
    'What are Shot Types?':
        'Shot Types are predefined categories of video tasks—like “Product Demo,” “How-To Tutorial,” or “Customer Testimonial”—that clarify requirements and expected deliverables.',
    'How do I hire a content creator?':
        'Navigate to Creators Hub in the sidebar, apply filters or search, view a creator’s profile, then click Hire and submit your job brief.',
    'What happens after I hire a creator?':
        'The creator reviews your brief and can ask questions or accept. Once accepted, payment goes to escrow, and upon your approval of final work, funds are released.',
    'Can I edit or delete a job after posting it?':
        'Before any acceptance, use Edit or Delete on the job page. After acceptance, discuss scope changes via the in‐app chat.',
    'How do payments work on the platform?':
        'You pre-fund jobs into escrow. Approving deliverables releases payment. Support can mediate disputes and issue refunds if needed.',
    'What is the Content Library?':
        'A centralized repository for all approved assets—videos, images, documents—organized by folders and tags for easy reuse.',
    'How do I upload my own video content?':
        'In Content Library, click Upload, choose your files (up to 2 GB), add metadata, and save. Your assets will be available immediately.',
    'What should I include in my job brief?':
        'Include the objective, style guidelines, shot list, format & length, deadline, and budget to minimize revisions.',
    'Can I cancel a job after it’s in progress?':
        'Yes—cancel on the job page before final submission. Refund depends on completed work; refer to our Cancellation Policy.',
    'How do I contact support if something goes wrong?':
        'Click Help in the sidebar, email support@tabledapp.com, or start a live chat (9 AM–6 PM EST) for assistance.'
};

export default function FAQPage() {
    return (
        <div className={styles.page}>
            <Sidebar />

            <section className={styles.contentArea}>
                <div className={styles.card}>
                    {QUESTIONS.map((q, idx) => (
                        <details key={idx} className={styles.faqCard}>
                            <summary className={styles.question}>
                                <span>{q}</span>
                                <HiChevronDown className={styles.toggleIcon} />
                            </summary>
                            <div className={styles.answer}>
                                <p>{ANSWERS[q]}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </section>
        </div>
    )
}
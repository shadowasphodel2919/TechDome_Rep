import { Link } from 'react-router-dom'
import { BookOpen, Briefcase, ArrowRight, Orbit, Zap } from 'lucide-react'
import useAuth from '../../hooks/useAuth'
import styles from './Welcome.module.css'

const Welcome = () => {
    const { username, fields } = useAuth()

    const hour = new Date().getHours()
    const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

    return (
        <div className={styles.page}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <p className={styles.greeting}>{greeting},</p>
                    <h1 className={styles.name}>
                        {username} <span className="gradient-text">✦</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Your personalized career dashboard is ready. Where would you like to orbit today?
                    </p>
                </div>
                <div className={styles.orbitIcon}>
                    <Orbit size={40} />
                </div>
            </div>

            {/* Quick Actions */}
            <div className={styles.actionGrid}>
                <Link to="/dash/courses" className={styles.actionCard}>
                    <div className={styles.actionIconWrap} style={{ background: 'hsl(43 90% 55% / 0.12)', color: 'var(--gold)' }}>
                        <BookOpen size={24} />
                    </div>
                    <div className={styles.actionBody}>
                        <h3>Browse Courses</h3>
                        <p>Udemy courses matched to your interests — ready to learn?</p>
                    </div>
                    <ArrowRight size={18} className={styles.actionArrow} />
                </Link>

                <Link to="/dash/jobs" className={styles.actionCard}>
                    <div className={styles.actionIconWrap} style={{ background: 'hsl(185 85% 55% / 0.12)', color: 'hsl(185, 85%, 55%)' }}>
                        <Briefcase size={24} />
                    </div>
                    <div className={styles.actionBody}>
                        <h3>Find Jobs</h3>
                        <p>Live job listings from Careerjet, matched to your location and skills.</p>
                    </div>
                    <ArrowRight size={18} className={styles.actionArrow} />
                </Link>
            </div>

            {/* Interests */}
            {fields && fields.length > 0 && (
                <div className={styles.interestsCard}>
                    <div className={styles.interestsHeader}>
                        <Zap size={16} />
                        <h4>Your Interests</h4>
                    </div>
                    <div className={styles.interestChips}>
                        {fields.map(f => (
                            <span key={f} className="badge badge-gold">{f}</span>
                        ))}
                    </div>
                </div>
            )}

            {/* Quick stats row */}
            <div className={styles.statsRow}>
                <div className={styles.statItem}>
                    <span className={styles.statNum}>{fields?.length || 0}</span>
                    <span className={styles.statLbl}>Active Interests</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.statItem}>
                    <span className={styles.statNum}>∞</span>
                    <span className={styles.statLbl}>Courses Available</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.statItem}>
                    <span className={styles.statNum}>🌍</span>
                    <span className={styles.statLbl}>Global Opportunities</span>
                </div>
            </div>
        </div>
    )
}

export default Welcome

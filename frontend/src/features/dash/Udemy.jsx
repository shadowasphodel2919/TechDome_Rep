import { useEffect, useState } from 'react'
import { BookOpen, RefreshCw, AlertCircle, Youtube, Info } from 'lucide-react'
import useAuth from '../../hooks/useAuth'
import CourseCard from '../../components/CourseCard'
import SkeletonCard from '../../components/ui/SkeletonCard'
import styles from './Dash.module.css'

const SOURCE_LABELS = {
    udemy:   { label: 'Powered by Udemy',   color: 'hsl(43, 90%, 55%)' },
    youtube: { label: 'Powered by YouTube', color: 'hsl(0, 100%, 50%)' },
}

const Udemy = () => {
    const { fields } = useAuth()
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [source, setSource] = useState(null)
    const [fallbackMsg, setFallbackMsg] = useState(null)

    const searchQuery = Array.isArray(fields) ? fields.join(' ') : ''

    const fetchCourses = async () => {
        if (!searchQuery.trim()) {
            setError('No interests set. Please update your profile.')
            setLoading(false)
            return
        }
        setLoading(true)
        setError(null)
        setFallbackMsg(null)
        try {
            const res = await fetch('/dash/courses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ field: searchQuery })
            })
            if (!res.ok) throw new Error(`Server error: ${res.status}`)
            const data = await res.json()
            setCourses(data.results || [])
            setSource(data.source || null)
            if (data._fallback) setFallbackMsg(data._message || null)
        } catch (err) {
            setError(err.message || 'Failed to load courses.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCourses()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const srcInfo = source ? SOURCE_LABELS[source] : null

    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className={styles.pageTitleWrap}>
                    <div className={styles.pageIcon} style={{ color: 'var(--gold)', background: 'hsl(43 90% 55% / 0.12)' }}>
                        <BookOpen size={20} />
                    </div>
                    <div>
                        <h1 className={styles.pageTitle}>Recommended Courses</h1>
                        <p className={styles.pageSubtitle}>
                            Courses matched to: <span className="text-gold">{fields?.join(', ') || 'your interests'}</span>
                        </p>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {srcInfo && (
                        <span style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: srcInfo.color,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            opacity: 0.8
                        }}>
                            {source === 'youtube' && <Youtube size={13} />}
                            {srcInfo.label}
                        </span>
                    )}
                    <button
                        className="btn btn-outline btn-sm"
                        onClick={fetchCourses}
                        disabled={loading}
                    >
                        <RefreshCw size={14} className={loading ? styles.spinning : ''} />
                        Refresh
                    </button>
                </div>
            </div>

            {/* Fallback notice */}
            {!loading && fallbackMsg && (
                <div style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                    padding: '1rem 1.25rem',
                    background: 'hsl(43 90% 55% / 0.06)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)'
                }}>
                    <Info size={16} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 1 }} />
                    <p style={{ margin: 0 }}>{fallbackMsg}</p>
                </div>
            )}

            {/* Content */}
            {loading && (
                <div className="grid grid-auto gap-6">
                    {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
                </div>
            )}

            {!loading && error && (
                <div className={styles.errorState}>
                    <AlertCircle size={36} />
                    <p>{error}</p>
                    <button className="btn btn-primary btn-sm" onClick={fetchCourses}>
                        <RefreshCw size={14} /> Try Again
                    </button>
                </div>
            )}

            {!loading && !error && courses.length === 0 && !fallbackMsg && (
                <div className={styles.emptyState}>
                    <BookOpen size={40} />
                    <p>No courses found. Try refreshing or updating your interests.</p>
                </div>
            )}

            {!loading && !error && courses.length > 0 && (
                <>
                    <p className={styles.resultCount}>{courses.length} courses found</p>
                    <div className="grid grid-auto gap-6">
                        {courses.map((course, i) => (
                            <CourseCard key={course.id || i} course={course} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Udemy

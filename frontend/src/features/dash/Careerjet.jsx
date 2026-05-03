import { useEffect, useState, useCallback } from 'react'
import { Briefcase, RefreshCw, AlertCircle, MapPin, Navigation, ChevronDown } from 'lucide-react'
import useAuth from '../../hooks/useAuth'
import JobCard from '../../components/JobCard'
import SkeletonCard from '../../components/ui/SkeletonCard'
import styles from './Dash.module.css'

const POPULAR_CITIES = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai',
    'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'London',
    'New York', 'Singapore', 'Dubai', 'Remote'
]

const Careerjet = () => {
    const { fields } = useAuth()
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [location, setLocation] = useState('')
    const [locLoading, setLocLoading] = useState(true)
    const [showDropdown, setShowDropdown] = useState(false)
    const [searched, setSearched] = useState(false)

    // Active field: default to first interest, not all joined together
    const [activeField, setActiveField] = useState(
        Array.isArray(fields) && fields.length > 0 ? fields[0] : ''
    )

    // Sync activeField when fields load (JWT decoded async)
    useEffect(() => {
        if (Array.isArray(fields) && fields.length > 0 && !activeField) {
            setActiveField(fields[0])
        }
    }, [fields, activeField])

    // Auto-detect location on mount
    useEffect(() => {
        if (!navigator.geolocation) {
            setShowDropdown(true)
            setLocLoading(false)
            return
        }
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                try {
                    const { latitude, longitude } = pos.coords
                    const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    )
                    const data = await res.json()
                    const city = data.address?.city || data.address?.town || data.address?.county || ''
                    setLocation(city)
                } catch {
                    setShowDropdown(true)
                } finally {
                    setLocLoading(false)
                }
            },
            () => {
                setShowDropdown(true)
                setLocLoading(false)
            },
            { timeout: 6000 }
        )
    }, [])

    const fetchJobs = useCallback(async (fieldOverride) => {
        const keyword = fieldOverride || activeField
        if (!location.trim() || !keyword.trim()) return
        setLoading(true)
        setError(null)
        setSearched(true)
        try {
            const res = await fetch('/dash/jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ location, field: keyword })
            })
            if (!res.ok) throw new Error(`Server error: ${res.status}`)
            const data = await res.json()
            setJobs(data.jobs || [])
        } catch (err) {
            setError(err.message || 'Failed to load jobs.')
        } finally {
            setLoading(false)
        }
    }, [location, activeField])

    // Auto-search when location is detected
    useEffect(() => {
        if (location && !locLoading && !searched && activeField) {
            fetchJobs()
        }
    }, [location, locLoading, searched, activeField, fetchJobs])

    // Switch field chip and immediately re-search
    const handleFieldSwitch = (f) => {
        setActiveField(f)
        setJobs([])
        setSearched(false)
        if (location.trim()) {
            fetchJobs(f)
            setSearched(true)
        }
    }

    return (
        <div className={styles.page}>
            {/* Header */}
            <div className={styles.pageHeader}>
                <div className={styles.pageTitleWrap}>
                    <div className={styles.pageIcon} style={{ color: 'hsl(185, 85%, 55%)', background: 'hsl(185 85% 55% / 0.12)' }}>
                        <Briefcase size={20} />
                    </div>
                    <div>
                        <h1 className={styles.pageTitle}>Job Listings</h1>
                        <p className={styles.pageSubtitle}>
                            Live opportunities near you
                        </p>
                    </div>
                </div>
            </div>

            {/* Field selector chips */}
            {Array.isArray(fields) && fields.length > 0 && (
                <div className={styles.fieldChips}>
                    <span className={styles.fieldChipsLabel}>Search by:</span>
                    {fields.map(f => (
                        <button
                            key={f}
                            className={`${styles.fieldChip} ${activeField === f ? styles.fieldChipActive : ''}`}
                            onClick={() => handleFieldSwitch(f)}
                            disabled={loading}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            )}

            {/* Location Bar */}
            <div className={styles.locationBar}>
                <div className={styles.locationInput}>
                    <MapPin size={16} className={styles.locationIcon} />
                    {locLoading ? (
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Detecting your location…</span>
                    ) : showDropdown ? (
                        <div className={styles.dropdownWrap}>
                            <select
                                className={`form-input ${styles.citySelect}`}
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                            >
                                <option value="">Select a city…</option>
                                {POPULAR_CITIES.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                            <ChevronDown size={14} className={styles.selectChevron} />
                        </div>
                    ) : (
                        <input
                            className={`form-input ${styles.locationInputField}`}
                            type="text"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            placeholder="City or country..."
                        />
                    )}
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => fetchJobs()}
                    disabled={loading || !location.trim() || locLoading || !activeField}
                >
                    {loading ? (
                        <RefreshCw size={14} className={styles.spinning} />
                    ) : (
                        <Navigation size={14} />
                    )}
                    Search Jobs
                </button>
            </div>

            {/* Results */}
            {loading && (
                <div className="grid grid-auto gap-6">
                    {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
                </div>
            )}

            {!loading && error && (
                <div className={styles.errorState}>
                    <AlertCircle size={36} />
                    <p>{error}</p>
                    <button className="btn btn-primary btn-sm" onClick={() => fetchJobs()}>
                        <RefreshCw size={14} /> Try Again
                    </button>
                </div>
            )}

            {!loading && !error && searched && jobs.length === 0 && (
                <div className={styles.emptyState}>
                    <Briefcase size={40} />
                    <p>No jobs found for <strong>{activeField}</strong> in <strong>{location}</strong>. Try a different location or field.</p>
                </div>
            )}

            {!loading && !error && jobs.length > 0 && (
                <>
                    <p className={styles.resultCount}>
                        {jobs.length} jobs for <strong>{activeField}</strong> in <strong>{location}</strong>
                    </p>
                    <div className="grid grid-auto gap-6">
                        {jobs.map((job, i) => (
                            <JobCard key={job.url || i} job={job} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Careerjet

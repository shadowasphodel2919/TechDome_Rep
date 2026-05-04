import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Orbit, LogIn, UserPlus, LayoutDashboard, BookOpen, Briefcase, LogOut, User, X, Menu, ChevronRight } from 'lucide-react'
import useAuth from '../hooks/useAuth'
import { useSendLogoutMutation } from '../features/auth/authApiSlice'
import styles from './Navbar.module.css'
import BASE_URL from '../app/api/baseUrl'

const NAV_ITEMS_AUTH = [
    { to: '/dash',         icon: <LayoutDashboard size={15} />, label: 'Dashboard' },
    { to: '/dash/courses', icon: <BookOpen size={15} />,        label: 'Courses'   },
    { to: '/dash/jobs',    icon: <Briefcase size={15} />,       label: 'Jobs'      },
]

const Navbar = () => {
    const [scrolled, setScrolled]       = useState(false)
    const [mobileOpen, setMobileOpen]   = useState(false)
    const [healthStatus, setHealthStatus] = useState('checking')
    const location  = useLocation()
    const navigate  = useNavigate()
    const { username } = useAuth()
    const [sendLogout] = useSendLogoutMutation()

    /* scroll detection */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    /* close mobile menu on route change */
    useEffect(() => { setMobileOpen(false) }, [location.pathname])

    /* prevent body scroll when menu open */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileOpen])

    /* health check */
    useEffect(() => {
        const checkHealth = async () => {
            try {
                const res = await fetch(`${BASE_URL}/health`)
                if (res.ok) setHealthStatus('ok')
                else setHealthStatus('error')
            } catch (err) {
                setHealthStatus('error')
            }
        }
        checkHealth()
        const interval = setInterval(checkHealth, 30000)
        return () => clearInterval(interval)
    }, [])

    const handleLogout = async () => {
        try { await sendLogout(); navigate('/') }
        catch { /* silent */ }
    }

    const isActive = (path) =>
        path === '/dash' ? location.pathname === '/dash' : location.pathname.startsWith(path)

    return (
        <>
            <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
                <div className={`container ${styles.inner}`}>

                    {/* ── Logo & Health ── */}
                    <div className={styles.brandGroup}>
                        <Link to="/" className={styles.logo} aria-label="SkillOrbit home">
                            <div className={styles.logoIcon}>
                                <Orbit size={18} strokeWidth={2.5} />
                            </div>
                            <span className={styles.logoText}>
                                Skill<span className={styles.logoAccent}>Orbit</span>
                            </span>
                        </Link>
                        
                        <div 
                            className={`${styles.healthIndicator} ${styles[healthStatus]}`}
                            title={`API Status: ${healthStatus === 'ok' ? 'Online' : healthStatus === 'error' ? 'Offline' : 'Checking'}`}
                        >
                            <div className={styles.healthDot} />
                        </div>
                    </div>

                    {/* ── Desktop Nav (centre pill strip) ── */}
                    {username && (
                        <nav className={styles.pillNav} aria-label="Main navigation">
                            {NAV_ITEMS_AUTH.map(({ to, icon, label }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    className={`${styles.pillLink} ${isActive(to) ? styles.pillActive : ''}`}
                                >
                                    {icon}
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    )}

                    {/* ── Desktop Right ── */}
                    <div className={styles.desktopRight}>
                        {username ? (
                            <>
                                <div className={styles.userChip}>
                                    <div className={styles.userAvatar}>
                                        {username.charAt(0).toUpperCase()}
                                    </div>
                                    <span className={styles.userName}>{username}</span>
                                </div>
                                <button
                                    className={styles.logoutBtn}
                                    onClick={handleLogout}
                                    title="Sign out"
                                >
                                    <LogOut size={15} />
                                    <span>Logout</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className={styles.signInLink}>
                                    <LogIn size={15} />
                                    Sign In
                                </Link>
                                <Link to="/signup" className={styles.getStartedBtn}>
                                    <UserPlus size={15} />
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>

                    {/* ── Mobile Hamburger ── */}
                    <button
                        className={styles.hamburger}
                        onClick={() => setMobileOpen(p => !p)}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* ── Bottom gold line (scrolled state) ── */}
                <div className={`${styles.goldLine} ${scrolled ? styles.goldLineVisible : ''}`} />
            </header>

            {/* ── Mobile Drawer ── */}
            <div
                className={`${styles.backdrop} ${mobileOpen ? styles.backdropOpen : ''}`}
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
            />
            <div
                className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ''}`}
                role="dialog"
                aria-label="Navigation menu"
            >
                {/* Drawer Header */}
                <div className={styles.drawerHeader}>
                    <div className={styles.drawerLogo}>
                        <div className={styles.logoIcon}>
                            <Orbit size={16} strokeWidth={2.5} />
                        </div>
                        <span className={styles.logoText}>
                            Skill<span className={styles.logoAccent}>Orbit</span>
                        </span>
                    </div>
                    <button
                        className={styles.drawerClose}
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className={styles.drawerBody}>
                    {username ? (
                        <>
                            {/* User block */}
                            <div className={styles.drawerUser}>
                                <div className={styles.drawerAvatar}>
                                    {username.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p className={styles.drawerUserName}>{username}</p>
                                    <p className={styles.drawerUserRole}>Member</p>
                                </div>
                            </div>

                            <div className={styles.drawerDivider} />

                            {/* Nav links */}
                            <nav className={styles.drawerNav}>
                                {NAV_ITEMS_AUTH.map(({ to, icon, label }) => (
                                    <Link
                                        key={to}
                                        to={to}
                                        className={`${styles.drawerLink} ${isActive(to) ? styles.drawerLinkActive : ''}`}
                                    >
                                        <span className={styles.drawerLinkIcon}>{icon}</span>
                                        {label}
                                        <ChevronRight size={14} className={styles.drawerLinkChevron} />
                                    </Link>
                                ))}
                            </nav>

                            <div className={styles.drawerDivider} />

                            <button className={styles.drawerLogout} onClick={handleLogout}>
                                <LogOut size={15} />
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <div className={styles.drawerAuthBtns}>
                            <Link to="/login" className={`btn btn-outline ${styles.drawerAuthLink}`}>
                                <LogIn size={15} /> Sign In
                            </Link>
                            <Link to="/signup" className={`btn btn-primary ${styles.drawerAuthLink}`}>
                                <UserPlus size={15} /> Get Started
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar

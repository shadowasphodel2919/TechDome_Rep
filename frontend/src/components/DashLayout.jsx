import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { LayoutDashboard, BookOpen, Briefcase, LogOut, Orbit, ChevronRight } from 'lucide-react'
import { useSendLogoutMutation } from '../features/auth/authApiSlice'
import useAuth from '../hooks/useAuth'
import styles from './DashLayout.module.css'

const NAV_ITEMS = [
    { to: '/dash',         icon: <LayoutDashboard size={18} />, label: 'Dashboard', exact: true },
    { to: '/dash/courses', icon: <BookOpen size={18} />,        label: 'Courses' },
    { to: '/dash/jobs',    icon: <Briefcase size={18} />,       label: 'Jobs' },
]

const DashLayout = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { username, fields } = useAuth()
    const [sendLogout] = useSendLogoutMutation()

    const handleLogout = async () => {
        try {
            await sendLogout()
            navigate('/')
        } catch (err) {
            console.error('Logout error:', err)
        }
    }

    const isActive = (item) => {
        if (item.exact) return location.pathname === item.to
        return location.pathname.startsWith(item.to)
    }

    return (
        <div className={styles.layout}>
            {/* ── Sidebar ── */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarTop}>
                    <Link to="/" className={styles.brand}>
                        <div className={styles.brandIcon}><Orbit size={16} /></div>
                        <span className={styles.brandText}>SkillOrbit</span>
                    </Link>

                    <div className={styles.userBlock}>
                        <div className={styles.userAvatar}>
                            {username?.charAt(0)?.toUpperCase() || 'U'}
                        </div>
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>{username}</span>
                            <span className={styles.userRole}>
                                {fields?.length > 0 ? `${fields.length} interests` : 'Learner'}
                            </span>
                        </div>
                    </div>

                    <nav className={styles.nav}>
                        <p className={styles.navLabel}>Navigation</p>
                        {NAV_ITEMS.map(item => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className={`${styles.navItem} ${isActive(item) ? styles.active : ''}`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                                {isActive(item) && <ChevronRight size={14} className={styles.activeChevron} />}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className={styles.sidebarBottom}>
                    <button className={styles.logoutBtn} onClick={handleLogout}>
                        <LogOut size={16} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* ── Main Content ── */}
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    )
}

export default DashLayout

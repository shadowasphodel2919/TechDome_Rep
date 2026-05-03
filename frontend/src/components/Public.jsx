import { Link } from 'react-router-dom'
import { Orbit, BookOpen, Briefcase, ArrowRight, Star, Zap, Shield, TrendingUp, ChevronRight, Users, Award, Globe } from 'lucide-react'
import styles from './Public.module.css'

const STATS = [
    { value: '50K+', label: 'Learners Upskilled' },
    { value: '12K+', label: 'Job Placements' },
    { value: '200+', label: 'Tech Courses' },
    { value: '4.9★', label: 'Average Rating' },
]

const FEATURES = [
    {
        icon: <BookOpen size={24} />,
        title: 'Personalized Courses',
        desc: 'Curated courses matched to your exact tech interests. No noise — just what you need to level up fast.',
        color: 'hsl(43, 90%, 55%)',
    },
    {
        icon: <Briefcase size={24} />,
        title: 'Smart Job Matching',
        desc: 'Real-time job listings matched to your skills and auto-detected location. One click to your next opportunity.',
        color: 'hsl(185, 85%, 55%)',
    },
    {
        icon: <Zap size={24} />,
        title: 'Instant Insights',
        desc: 'Know what the industry wants right now. Stay one orbit ahead of the market.',
        color: 'hsl(258, 80%, 65%)',
    },
]

const FIELDS = [
    'Web Development', 'AI & Machine Learning', 'Cloud Computing', 
    'Cyber Security', 'Data Science', 'Android Development',
    'Blockchain', 'IoT', 'Game Development', 'AR/VR',
]

const HOW_IT_WORKS = [
    { step: '01', title: 'Create your account', desc: 'Sign up in under 60 seconds. Pick the tech domains that excite you.' },
    { step: '02', title: 'Get your orbit', desc: 'SkillOrbit maps your interests to real courses and live job openings.' },
    { step: '03', title: 'Launch your career', desc: 'Apply to jobs, complete courses, and track your growth — all in one place.' },
]

const Public = () => {
    return (
        <div className={styles.page}>
            {/* ── HERO ── */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <div className={styles.orb1} />
                    <div className={styles.orb2} />
                    <div className={styles.grid} />
                </div>
                <div className={`container ${styles.heroContent}`}>
                    <div className={`${styles.heroBadge} badge badge-gold animate-fadeInUp`}>
                        <Orbit size={12} />
                        The future of tech careers starts here
                    </div>
                    <h1 className={`${styles.heroTitle} animate-fadeInUp`} style={{ animationDelay: '0.1s' }}>
                        Your career,<br />
                        <span className="gradient-text">in orbit.</span>
                    </h1>
                    <p className={`${styles.heroDesc} animate-fadeInUp`} style={{ animationDelay: '0.2s' }}>
                        SkillOrbit connects your passion for tech to personalized learning paths and real career opportunities — all powered by your interests.
                    </p>
                    <div className={`${styles.heroCta} animate-fadeInUp`} style={{ animationDelay: '0.3s' }}>
                        <Link to="/signup" className="btn btn-primary btn-lg">
                            Start Your Journey
                            <ArrowRight size={18} />
                        </Link>
                        <Link to="/login" className="btn btn-outline btn-lg">
                            Sign In
                        </Link>
                    </div>

                    {/* Floating field tags */}
                    <div className={`${styles.fieldTags} animate-fadeInUp`} style={{ animationDelay: '0.45s' }}>
                        {FIELDS.map(f => (
                            <span key={f} className="chip">{f}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        {STATS.map((s, i) => (
                            <div key={i} className={styles.statCard}>
                                <span className={styles.statValue}>{s.value}</span>
                                <span className={styles.statLabel}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FEATURES ── */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <div className={`${styles.sectionHeader} text-center`}>
                        <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
                            <Star size={12} /> Why SkillOrbit
                        </span>
                        <h2>Everything you need to <span className="gradient-text">take off</span></h2>
                        <p style={{ maxWidth: '520px', margin: '1rem auto 0' }}>
                            We blend personalized education with real-world job matching so every step you take moves your career forward.
                        </p>
                    </div>
                    <div className={`grid grid-3 gap-6 stagger-children ${styles.featuresGrid}`}>
                        {FEATURES.map((f, i) => (
                            <div key={i} className={`card animate-fadeInUp ${styles.featureCard}`}>
                                <div className={styles.featureIcon} style={{ color: f.color, background: `${f.color}14` }}>
                                    {f.icon}
                                </div>
                                <h3 className={styles.featureTitle}>{f.title}</h3>
                                <p className={styles.featureDesc}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section className={styles.howSection}>
                <div className="container">
                    <div className={`${styles.sectionHeader} text-center`}>
                        <h2>How it <span className="gradient-text">works</span></h2>
                        <p style={{ maxWidth: '480px', margin: '0.75rem auto 0' }}>
                            Three steps to go from curious to career-ready.
                        </p>
                    </div>
                    <div className={styles.stepsGrid}>
                        {HOW_IT_WORKS.map((s, i) => (
                            <div key={i} className={styles.step}>
                                <div className={styles.stepNumber}>{s.step}</div>
                                <div className={styles.stepContent}>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                                {i < HOW_IT_WORKS.length - 1 && (
                                    <ChevronRight className={styles.stepArrow} size={24} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <div className={styles.ctaGlow} />
                        <div className={styles.ctaIconRing}>
                            <Orbit size={28} />
                        </div>
                        <h2>Ready to enter your orbit?</h2>
                        <p>Join thousands of tech learners who are already on their trajectory.</p>
                        <Link to="/signup" className="btn btn-primary btn-lg" style={{ marginTop: '1.5rem' }}>
                            Create Free Account
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerInner}>
                        <div className={styles.footerBrand}>
                            <div className={styles.footerLogo}>
                                <Orbit size={18} />
                                <span>SkillOrbit</span>
                            </div>
                            <p>Your career, accelerated.</p>
                        </div>
                        <div className={styles.footerLinks}>
                            <Link to="/signup">Get Started</Link>
                            <Link to="/login">Sign In</Link>
                        </div>
                    </div>
                    <hr className="divider" />
                    <p className={styles.footerCopy}>© {new Date().getFullYear()} SkillOrbit. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Public

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Orbit, Check, ArrowRight, ArrowLeft, UserPlus } from 'lucide-react'
import { FIELDS } from '../../config/fields'
import { useAddNewUserMutation } from './usersApiSlice'
import styles from '../auth/Auth.module.css'

const USER_REGEX = /^[A-Za-z]{3,20}$/
const PWD_REGEX  = /^[A-Za-z0-9!@#$%]{4,12}$/
const PNO_REGEX  = /^\d{10}$/
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const FIELD_LIST = Object.values(FIELDS)

const SignUp = () => {
    const [addNewUser, { isLoading, isSuccess, isError, error }] = useAddNewUserMutation()
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [showPwd, setShowPwd] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [fields, setFields] = useState([])

    const validUsername = USER_REGEX.test(username)
    const validPassword = PWD_REGEX.test(password)
    const validEmail    = EMAIL_REGEX.test(email)
    const validMobile   = PNO_REGEX.test(mobile)

    const step1Valid = validUsername && validPassword && validEmail && validMobile
    const canSave    = step1Valid && fields.length > 0 && !isLoading

    useEffect(() => {
        if (isSuccess) {
            setUsername(''); setPassword(''); setEmail(''); setMobile(''); setFields([])
            navigate('/login')
        }
    }, [isSuccess, navigate])

    const toggleField = (field) => {
        setFields(prev =>
            prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
        )
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (canSave) await addNewUser({ username, password, email, mobile, fields })
    }

    const getInputClass = (valid, value) => {
        if (!value) return 'form-input'
        return `form-input ${valid ? 'valid' : 'invalid'}`
    }

    return (
        <div className={styles.page}>
            {/* Left Panel */}
            <div className={styles.leftPanel}>
                <div className={styles.leftContent}>
                    <div className={styles.logoMark}><Orbit size={32} /></div>
                    <h2 className={styles.leftTitle}>
                        Begin your <span className="gradient-text">orbit</span> today
                    </h2>
                    <p className={styles.leftDesc}>
                        Create your account and tell us what tech domains excite you. We'll do the rest.
                    </p>
                    <div className={styles.leftBullets}>
                        {[
                            'Free to join — always',
                            'Choose up to 10 tech interests',
                            'Instant course & job recommendations'
                        ].map(b => (
                            <div key={b} className={styles.bullet}>
                                <span className={styles.bulletDot} />
                                <span>{b}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.leftOrb} />
            </div>

            {/* Right Panel */}
            <div className={styles.rightPanel}>
                <div className={styles.formCard}>
                    <div className={styles.formHeader}>
                        <h1 className={styles.formTitle}>
                            {step === 1 ? 'Create Account' : 'Your Interests'}
                        </h1>
                        <p className={styles.formSubtitle}>
                            {step === 1
                                ? <>Already have one? <Link to="/login" className={styles.formLink}>Sign in</Link></>
                                : `Select the tech fields you want to explore (${fields.length} selected)`
                            }
                        </p>
                    </div>

                    {/* Step indicator */}
                    <div className={styles.steps}>
                        <div className={`${styles.stepDot} ${step >= 1 ? styles.active : ''} ${step > 1 ? styles.done : ''}`}>
                            {step > 1 ? <Check size={14} /> : '1'}
                        </div>
                        <div className={`${styles.stepLine} ${step > 1 ? styles.done : ''}`} />
                        <div className={`${styles.stepDot} ${step >= 2 ? styles.active : ''}`}>2</div>
                    </div>

                    {isError && (
                        <div className="errmsg" role="alert">
                            {error?.data?.message || 'Registration failed. Please try again.'}
                        </div>
                    )}

                    <form onSubmit={onSubmit}>
                        {step === 1 ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="su-username">
                                        Username <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>(3–20 letters)</span>
                                    </label>
                                    <input
                                        id="su-username"
                                        className={getInputClass(validUsername, username)}
                                        type="text"
                                        autoComplete="off"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        placeholder="e.g. johndoe"
                                        autoFocus
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="su-email">Email</label>
                                    <input
                                        id="su-email"
                                        className={getInputClass(validEmail, email)}
                                        type="email"
                                        autoComplete="off"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="su-mobile">
                                        Mobile <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>(10 digits)</span>
                                    </label>
                                    <input
                                        id="su-mobile"
                                        className={getInputClass(validMobile, mobile)}
                                        type="tel"
                                        autoComplete="off"
                                        value={mobile}
                                        onChange={e => setMobile(e.target.value)}
                                        placeholder="10-digit mobile number"
                                        maxLength={10}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="su-password">
                                        Password <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>(4–12 chars, incl. !@#$%)</span>
                                    </label>
                                    <div className={styles.passwordWrap}>
                                        <input
                                            id="su-password"
                                            className={getInputClass(validPassword, password)}
                                            type={showPwd ? 'text' : 'password'}
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            placeholder="Choose a strong password"
                                        />
                                        <button
                                            type="button"
                                            className={styles.eyeBtn}
                                            onClick={() => setShowPwd(p => !p)}
                                            aria-label="Toggle password visibility"
                                        >
                                            {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    style={{ width: '100%' }}
                                    disabled={!step1Valid}
                                    onClick={() => setStep(2)}
                                >
                                    Next: Choose Interests
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                                <div className={styles.chipGrid}>
                                    {FIELD_LIST.map(f => (
                                        <button
                                            key={f}
                                            type="button"
                                            className={`chip ${fields.includes(f) ? 'selected' : ''}`}
                                            onClick={() => toggleField(f)}
                                        >
                                            {fields.includes(f) && <Check size={12} />}
                                            {f}
                                        </button>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                                    <button
                                        type="button"
                                        className="btn btn-outline"
                                        style={{ flex: 1 }}
                                        onClick={() => setStep(1)}
                                    >
                                        <ArrowLeft size={16} />
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ flex: 2 }}
                                        disabled={!canSave}
                                    >
                                        {isLoading ? 'Creating...' : (
                                            <>
                                                <UserPlus size={16} />
                                                Launch My Account
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp

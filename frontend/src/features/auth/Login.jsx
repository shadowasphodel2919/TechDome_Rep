import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Eye, EyeOff, Orbit, LogIn } from 'lucide-react'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist'
import styles from './Auth.module.css'

const Login = () => {
    const userRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [showPwd, setShowPwd] = useState(false)
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => { userRef.current?.focus() }, [])
    useEffect(() => { setErrMsg('') }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setPassword('')
            navigate('/dash')
        } catch (err) {
            if (!err.status)          setErrMsg('No server response. Check your connection.')
            else if (err.status === 400) setErrMsg('Username and password are required.')
            else if (err.status === 401) setErrMsg('Invalid credentials. Please try again.')
            else setErrMsg(err.data?.message || 'Login failed.')
        }
    }

    return (
        <div className={styles.page}>
            {/* Left Panel */}
            <div className={styles.leftPanel}>
                <div className={styles.leftContent}>
                    <div className={styles.logoMark}>
                        <Orbit size={32} />
                    </div>
                    <h2 className={styles.leftTitle}>
                        Welcome back to your <span className="gradient-text">orbit</span>
                    </h2>
                    <p className={styles.leftDesc}>
                        Sign in to access your personalized course recommendations and job matches.
                    </p>
                    <div className={styles.leftBullets}>
                        {['Personalized course recommendations', 'Real-time job listings', 'Career growth tracking'].map(b => (
                            <div key={b} className={styles.bullet}>
                                <span className={styles.bulletDot} />
                                <span>{b}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.leftOrb} />
            </div>

            {/* Right Panel - Form */}
            <div className={styles.rightPanel}>
                <div className={styles.formCard}>
                    <div className={styles.formHeader}>
                        <h1 className={styles.formTitle}>Sign In</h1>
                        <p className={styles.formSubtitle}>
                            New here?{' '}
                            <Link to="/signup" className={styles.formLink}>Create an account</Link>
                        </p>
                    </div>

                    {errMsg && (
                        <div className="errmsg" role="alert">{errMsg}</div>
                    )}

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="login-username">Username</label>
                            <input
                                id="login-username"
                                className="form-input"
                                type="text"
                                ref={userRef}
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                autoComplete="off"
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="login-password">Password</label>
                            <div className={styles.passwordWrap}>
                                <input
                                    id="login-password"
                                    className="form-input"
                                    type={showPwd ? 'text' : 'password'}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
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

                        <label className={styles.persistLabel} htmlFor="login-persist">
                            <input
                                id="login-persist"
                                type="checkbox"
                                className={styles.persistCheck}
                                checked={persist}
                                onChange={() => setPersist(p => !p)}
                            />
                            <span className={styles.persistText}>Trust this device</span>
                        </label>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%', marginTop: '0.5rem' }}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className={styles.loadingDots}>Signing in</span>
                            ) : (
                                <>
                                    <LogIn size={16} />
                                    Sign In
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

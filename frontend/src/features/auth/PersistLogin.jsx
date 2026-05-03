import { Outlet, Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useRefreshMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './authSlice'

const PersistLogin = () => {
    const [persist] = usePersist()
    const token = useSelector(selectCurrentToken)
    const effectRan = useRef(false)
    const [trueSuccess, setTrueSuccess] = useState(false)

    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error
    }] = useRefreshMutation()

    useEffect(() => {
        if (effectRan.current === true || import.meta.env.MODE !== 'development') {
            const verifyRefreshToken = async () => {
                try {
                    await refresh()
                    setTrueSuccess(true)
                } catch (err) {
                    console.error('Token refresh error:', err)
                }
            }
            if (!token && persist) verifyRefreshToken()
        }
        return () => { effectRan.current = true }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!persist) return <Outlet />

    if (isLoading) return (
        <div style={{
            minHeight: '80vh', display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: 'var(--text-muted)'
        }}>
            Loading session…
        </div>
    )

    if (isError) return (
        <div style={{
            minHeight: '80vh', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '1rem'
        }}>
            <p className="errmsg">{error?.data?.message || 'Session expired.'}</p>
            <Link to="/login" className="btn btn-primary">Sign In Again</Link>
        </div>
    )

    if (isSuccess && trueSuccess) return <Outlet />
    if (token && isUninitialized) return <Outlet />

    return null
}

export default PersistLogin

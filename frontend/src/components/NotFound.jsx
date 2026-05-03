import { Link } from 'react-router-dom'
import { Orbit, Home } from 'lucide-react'

const NotFound = () => (
    <div style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        textAlign: 'center',
        padding: '2rem'
    }}>
        <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gold)'
        }}>
            <Orbit size={36} />
        </div>
        <h1 style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--gold)', lineHeight: 1 }}>404</h1>
        <h2>Lost in space</h2>
        <p style={{ maxWidth: '360px' }}>This page doesn't exist in our orbit. Let's get you back on track.</p>
        <Link to="/" className="btn btn-primary">
            <Home size={16} />
            Back to Home
        </Link>
    </div>
)

export default NotFound

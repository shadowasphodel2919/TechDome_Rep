import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSendLogoutMutation } from '../features/auth/authApiSlice'
import useAuth from '../../hooks/useAuth'

const Welcome = () => {

    const {username, email, mobile, fields} = useAuth();
    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)
    const navigate = useNavigate()
    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation()
    useEffect(() => {
        if (isSuccess) navigate('/')
    }, [isSuccess, navigate])
    // const handleSubmit = () => {
    //     localStorage.removeItem('token');
    //     window.location.href = "https://techdome.vercel.app/";
    // }
    const content = (
        <section className="welcome">
            <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg' className='img-thumbnail'/>
            <div className='left-db'>
            <p>{today}</p>

            <h1>Welcome {username}</h1>

            <h4>Fields: {fields}</h4>

                <p><Link to="/dash/udemy">View Courses</Link></p>
                <p><Link to="/dash/careerjet">View Jobs</Link></p>
                <p><Link onClick={sendLogout}>Log Out</Link></p>
            </div>

        </section>
    )
    return content
}

export default Welcome
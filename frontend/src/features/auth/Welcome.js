import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Welcome = () => {

    const {username, email, mobile, fields} = useAuth();
    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)
    const handleSubmit = () => {
        localStorage.removeItem('token');
        window.location.href = "http://localhost:3000/";
    }
    const content = (
        <section className="welcome">
            <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg' className='img-thumbnail'/>
            <div className='left-db'>
            <p>{today}</p>

            <h1>Welcome {username}</h1>

            <h4>Fields: {fields}</h4>

                <p><Link to="/dash/udemy">View Courses</Link></p>
                <p><Link to="/dash/careerjet">View Jobs</Link></p>
                <p><Link onClick={(e)=>handleSubmit(e)}>Log Out</Link></p>
            </div>

        </section>
    )
    return content
}

export default Welcome
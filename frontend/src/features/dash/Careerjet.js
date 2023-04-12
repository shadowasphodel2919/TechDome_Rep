import useAuth from '../../hooks/useAuth'
import { useEffect, useState } from 'react';
import { JobCard } from '../../components/JobCard';

const Careerjet = () => {
    const {username, email, mobile, fields} = useAuth();
    const [data, getData] = useState('');
    useEffect(() => {
        getAllData();
    },[]);
    let str = "";
    const interests = Object.values(fields).map(field=>{
        str += field+" "
        return (
            <p>
                {field}
            </p>
        )
    })
    const getAllData = () => {
        fetch('http://localhost:3600/dash/jobs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                location: "London",
                field: str
            })
        }).then((response) => {
            console.log(response);
            return response.json()
        }).then(data => {
            const allData = data.jobs;
            console.log(allData);
            getData(allData);
        })
    }
    const content= (
        <div className='courses__main'>
            <h2>Showing jobs for</h2>
            <h4>{interests}</h4>
        <div className='courses_main'>
            <JobCard props={data} />
        </div>
        </div>
    )
    return content
}
export default Careerjet
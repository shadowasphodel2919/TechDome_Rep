import useAuth from "../../hooks/useAuth"
import { useEffect, useState } from 'react';
import { CourseCard } from "../../components/CourseCard";

const Udemy = () => {
    const {username, email, mobile, fields} = useAuth();
    const [data, getData] = useState('');
    useEffect(() => {
        getAllData();
    },[]);
    let str = "";
    const interests = Object.values(fields).map(field=>{
        str += field
        return (
            <p>
                {field}
            </p>
        )
    })
    // console.log(str);

    const getAllData = () => {
        fetch('https://techdome.onrender.com/dash/courses', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                field: str
            })
        }).then((response) => {
            return response.json()
        }).then(data => {
            const allData = data.results;
            console.log(allData);
            getData(allData);
        })
    }

    const content = (
        <div className="courses__main">
        <h2>Courses recommended for: </h2>
        <h4>{interests}</h4>
        <div className="courses_main">
            <CourseCard props={data} />
        </div>
        </div>
    )
    return content
}
export default Udemy
import React from  'react';
export const CourseCard = (data) => {
    console.log(data.props[0]);
    if(data.props.length > 0){
        return (
            data.props.map((e, index) => {
                const url = "https://www.udemy.com"+e.url;
                // console.log(url);
                return (<div className="courseCard" key={e.id} onClick={() => window.location.href = url}>
                    <img className='courseThumbnail' src={e.image_480x270} />
                    <p className='courseTitle'>{e.title}</p>
                    <p className='courseAuthor'>{e.visible_instructors[0].title}</p>
                </div>)
            })
        );        
    }
}

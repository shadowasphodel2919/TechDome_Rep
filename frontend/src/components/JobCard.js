import React from  'react';
export const JobCard = (data) => {
    //console.log(data.props[0]);
    if(data.props.length > 0){
        //console.log(data.props.length);
        return (
            data.props.map((e, index) => {
                const url = e.url;
                console.log(index);
                return (<div className="courseCard" key={e.id} onClick={() => window.location.href = url}>
                    <p className='courseTitle'>{e.title}</p>
                    <p className='courseAuthor'>{e.locations}</p>
                </div>)
            })
        );        
    }
}

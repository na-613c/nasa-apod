import React from 'react';


const Picture = ({src, title,date}) => {
    return (
        <div className='item'>
            <img src={src} alt={title} title={title}/>
            <p>{title}</p>
            <p>{date}</p>
        </div>)

};

export default Picture;
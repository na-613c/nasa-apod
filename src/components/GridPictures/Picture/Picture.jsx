import React from 'react';


const Picture = ({src, title,date,setBigImage}) => {
    return (
        <div className='item'>
            <img src={src} alt={title} title={title} onClick={()=>setBigImage(src)}/>
            <p>{title}</p>
            <p>{date}</p>
        </div>)

};

export default Picture;
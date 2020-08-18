import React from 'react';


const Picture = ({src, title, date, setBigImage}) => {
    return (
        <div className='item' onClick={() => setBigImage(src)}>
            <img src={src} alt={title} title={title}/>
            <p> <b>{title}</b></p>
            <p>{date}</p>
        </div>)

};

export default Picture;
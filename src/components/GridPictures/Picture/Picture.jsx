import React from 'react';


const Picture = ({img, setBigImage}) => {
    return (
        <div className='item' onClick={() => setBigImage(img)}>
            <img src={img.url} alt={img.title} title={img.title}/>
            <p> <b>{img.title}</b></p>
            <p>{img.date}</p>
        </div>)
};

export default Picture;
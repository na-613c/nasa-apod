import React from 'react';


const Picture = ({src, title}) => {
    return (
        <div>
            <img key={src} src={src} alt={title}/>
            <span>{title}</span>
        </div>)

};

export default Picture;
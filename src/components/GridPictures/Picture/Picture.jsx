import React from 'react';


const Picture = ({src}) => {
    return (
        <img key={src} src={src} alt=""/>
        )

};

export default Picture;
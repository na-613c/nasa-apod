import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Picture = ({img, setBigImage}) => {

    return (
        <div className='item' onClick={() => setBigImage(img)}>
            <LazyLoadImage alt={img.title}
                           effect="blur"
                           src={img.url}
                           visibleByDefault={true}/>
            <p><b>{img.title}</b></p>
            <p>{img.date}</p>
        </div>
    )
};

export default Picture;
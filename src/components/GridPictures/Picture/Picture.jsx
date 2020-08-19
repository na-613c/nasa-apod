import React from 'react';
import {LazyLoadComponent, LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Picture = ({img, setBigImage, scrollPosition}) => {

    return (
        <LazyLoadComponent>
            <div className='item' onClick={() => setBigImage(img)}>
                <LazyLoadImage alt={img.title}
                               effect="blur"
                               src={img.url}
                               scrollPosition={scrollPosition}
                               visibleByDefault={true}/>
                <p><b>{img.title}</b></p>
                <p>{img.date}</p>
            </div>
        </LazyLoadComponent>)
};

export default Picture;
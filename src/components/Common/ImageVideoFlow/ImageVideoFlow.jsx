import {LazyLoadImage} from "react-lazy-load-image-component";
import React from "react";


const ImageVideoFlow = ({media_type, title, url, ...restProp}) => {
    switch (media_type) {
        case 'image':
            return <Image title={title} url={url} {...restProp}/>;
        case 'video':
            return <Video url={url} {...restProp}/>;
    }
};

const Image = ({title, url, ...restProp}) => {
    return (
        <LazyLoadImage alt={title}
                       title={title}
                       effect="blur"
                       src={url}
                       visibleByDefault={true}
                       {...restProp}/>
    )
};

const Video = ({url}) => {
    return (
        <iframe src={url} frameBorder="0" allowFullScreen allowTransparency/>
    )
};

export default ImageVideoFlow;
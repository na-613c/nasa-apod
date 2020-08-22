import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageVideoFlow from "../../Common/ImageVideoFlow/ImageVideoFlow";

const Picture = ({img, setModal, imgArray, id}) => {

    const setModalImages = () => setModal(imgArray, id);

    return (
        <div className='item' onClick={setModalImages}>
            <ImageVideoFlow media_type={img.media_type} title={img.title} url={img.url}/>
            <p><b>{img.title}</b></p>
            <p>{img.date}</p>
        </div>
    )
};

export default Picture;
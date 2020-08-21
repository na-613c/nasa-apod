import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CloseButton from "../Common/Buttons/CloseButton";
import PrevImageButton from "../Common/Buttons/PrevImageButton";
import NextImageButton from "../Common/Buttons/NextImageButton";
import DownloadButton from "../Common/Buttons/DownloadButton";


const ModalImage = ({images, setModal, movePrev, moveNext}) => {

    const onClickSetBigImage = (e) => {
        if (e.target.className === 'background-big-image') setModal();
    };

    const image = images.viewedImages[images.key];

    return (
        <>
            {(images.isShow) &&
            <div className='background-big-image'
                 key={images.key}
                 onClick={onClickSetBigImage}>

                {images.isShowPrev &&
                <PrevImageButton
                    onClick={() => movePrev(images.key, images.viewedImages)}/>
                }

                {images.isShowNext &&
                <NextImageButton
                    onClick={() => moveNext(images.key, images.viewedImages)}/>
                }

                <CloseButton onClick={setModal}/>
                <DownloadButton url={image.hdurl}/>

                <div className='big-image'>
                    <img src={image.url} alt=''/>
                    <p>{image.title} [ {image.date} ]</p>
                </div>
            </div>}
        </>
    )
};

export default ModalImage;
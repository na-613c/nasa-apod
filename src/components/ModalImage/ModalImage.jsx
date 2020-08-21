import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CloseButton from "../Common/Buttons/CloseButton";
import PrevImageButton from "../Common/Buttons/PrevImageButton";
import NextImageButton from "../Common/Buttons/NextImageButton";
import DownloadButton from "../Common/Buttons/DownloadButton";


const ModalImage = ({images, setModal, movePrev, moveNext}) => {

    const bg_class = 'background-modal-image';
    const modal_content = 'modal-content';
    const modal_image_content = 'modal-image-content';


    const onClickSetBigImage = (e) => {
        const targetClass = e.target.className;

        switch (targetClass) {
            case  bg_class :
            case  modal_content :
            case  modal_image_content :
                return setModal();
        }

    };

    const image = images.viewedImages[images.key];

    return (
        <>
            {(images.isShow) &&
            <div className={bg_class}
                 onClick={onClickSetBigImage}
                 key={images.key}>

                <div className={modal_content}>

                    <div className={modal_image_content}>
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

                        <div className='image-explanation' data-title={image.explanation}>
                            <img src={image.url} alt='' className='image-explanation' data-title={image.explanation}/>
                        </div>
                    </div>

                    <p>{image.title} [ {image.date} ]</p>
                </div>
            </div>}
        </>
    )
};

export default ModalImage;
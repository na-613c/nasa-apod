import React, {useEffect, useState} from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CloseButton from "../Common/Buttons/CloseButton";
import PrevImageButton from "../Common/Buttons/PrevImageButton";
import NextImageButton from "../Common/Buttons/NextImageButton";
import DownloadButton from "../Common/Buttons/DownloadButton";
import ImageVideoFlow from "../Common/ImageVideoFlow/ImageVideoFlow";


const ModalImage = ({images, setModal, movePrev, moveNext}) => {

    const bg_class = 'background-modal-image';
    const modal_content = 'modal-content';
    const modal_image_content = 'modal-image-content';
    const image = images.viewedImages[images.key];

    const [isShowExplanation, setIsShowExplanation] = useState(false);
    useEffect(() => setIsShowExplanation(false), [images.isShow]);

    const onClickSetBigImage = (e) => {
        const targetClass = e.target.className;
        switch (targetClass) {
            case  bg_class :
            case  modal_content :
            case  modal_image_content :
                return setModal();
        }
    };

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

                        <div className='image-explanation'>
                            {isShowExplanation &&
                            <Explanation media_type={image.media_type} explanation={image.explanation}/>
                            }

                            <ImageVideoFlow media_type={image.media_type}
                                            title={image.title}
                                            url={image.url}/>
                        </div>
                    </div>
                    <p>{image.title} [ {image.date} ]
                        <a className="more__info"  onClick={() => setIsShowExplanation(!isShowExplanation)}> more informtion </a>
                    </p>

                </div>
            </div>}
        </>
    )
};

const Explanation = ({media_type, explanation}) => {
    switch (media_type) {
        case 'image':
            return <div className='pullUp'>{explanation}</div>;
        case 'video':
            return <div className='pullDown'>{explanation}</div>;
    }
};

export default ModalImage;
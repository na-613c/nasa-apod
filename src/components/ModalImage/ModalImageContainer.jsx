import React, {useEffect, useState} from 'react';
import PrevImageButton from '../Common/Buttons/PrevImageButton';
import NextImageButton from '../Common/Buttons/NextImageButton';
import ImageVideoFlow from '../Common/ImageVideoFlow/ImageVideoFlow';
import CloseButton from '../Common/Buttons/CloseButton';
import DownloadButton from '../Common/Buttons/DownloadButton';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const bg_class = 'background-modal-image';
const modal_content = 'modal-content';
const modal_image_content = 'modal-image-content';

const ModalImageContainer = ({images, setModal}) => {

    const [isShowExplanation, setIsShowExplanation] = useState(false);
    const [newKey, setNewKey] = useState(images.key);

    useEffect(() => {
        setIsShowExplanation(false);
        setNewKey(images.key);
    }, [images.isShow]);

    const onClickSetBigImage = (e) => {
        const targetClass = e.target.className;
        switch (targetClass) {
            case  bg_class :
            case  modal_content :
            case  modal_image_content :
                return setModal();
            default:
                return null;
        }
    };

    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: images.key,
        nextArrow: <NextImageButton/>,
        prevArrow: <PrevImageButton/>,
        beforeChange: (current, next) => setNewKey(next),
    };

    const imageArray = images.viewedImages.map((i, id) => {
        return <CustomSlide key={id}
                            image={i}
                            isShowExplanation={isShowExplanation}
                            setIsShowExplanation={setIsShowExplanation}/>
    });


    return (
        <>
            {(images.isShow) &&
            <div className={modal_content} onClick={onClickSetBigImage}>
                <CloseButton onClick={setModal}/>
                <DownloadButton url={images.viewedImages[newKey].hdurl}/>
                <Slider {...settings}>
                    {imageArray}
                </Slider>
            </div>}
        </>
    )
};


const CustomSlide = React.memo(({image, isShowExplanation, setIsShowExplanation}) => {
    return (
        <div className={modal_image_content}>
            <div className='image-explanation'>

                {isShowExplanation &&
                <Explanation media_type={image.media_type} explanation={image.explanation}/>
                }

                <ImageVideoFlow media_type={image.media_type}
                                title={image.title}
                                url={image.url}/>
            </div>
            <p className='azure'>{image.title} [ {image.date} ] <a
                className='more__info'
                onClick={() => setIsShowExplanation(!isShowExplanation)}>
                more informtion
            </a>
            </p>
        </div>
    )
});

const Explanation = ({media_type, explanation}) => {
    switch (media_type) {
        case 'image':
            return <div className='pullUp'>{explanation}</div>;
        case 'video':
            return <div className='pullDown'>{explanation}</div>;
        default:
            return null;
    }
};

export default React.memo(ModalImageContainer);
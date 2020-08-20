import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BigImage = ({image, setModal}) => {
    if (image.isShow) {
        const onClickSetBigImage = (e) => {
            if (e.target.className === 'background-big-image') setModal();
        };

        return (
            <div className='background-big-image'
                 key={image}
                 onClick={onClickSetBigImage}>

                <svg onClick={setModal} className='modal__cross'
                     viewBox="0 0 16 16" xmlns='http://www.w3.org/2000/svg'>
                    <path fill-rule="evenodd"
                          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fill-rule="evenodd"
                          d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                    <path fill-rule="evenodd"
                          d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                </svg>

                <a href={image.hdurl} target='_blank' download>
                    <svg className='modal__download' viewBox="0 0 16 16"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd"
                              d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                        <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </a>

                <div className='big-image'>
                    <img src={image.url} alt=''/>
                    <p>{image.title} [ {image.date} ]</p>
                </div>
            </div>
        )
    } else return (<></>);
};

export default BigImage;
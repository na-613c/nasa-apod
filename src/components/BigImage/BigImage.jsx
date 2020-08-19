import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BigImage = ({src, isModal, setBigImage}) => {
    if (isModal) {

        const onClickSetBigImage = (e) =>{
            if(e.target.className === 'background-big-image')  setBigImage();
        };

        return (
            <div className='background-big-image'
                 key={src}
                 onClick={onClickSetBigImage}>
                <svg onClick={setBigImage} className='modal__cross' xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 24 24'>
                    <path
                        d='M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z'/>
                </svg>
                <div className='big-image'>
                    <LazyLoadImage
                        effect="blur"
                        src={src.url}
                        trackWindowScroll ={{delayTime:1000}}/>
                    {/*<img src={src.hdurl} alt=''/>*/}
                    <p>{src.title} [ {src.date} ]</p>
                    <a href={src.hdurl} target='_blank' download>Скачать файл</a>
                </div>
            </div>
        )
    } else return (<></>);
};

export default BigImage;
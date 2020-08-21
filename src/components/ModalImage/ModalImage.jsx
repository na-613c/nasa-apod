import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CloseButton from "../Common/Buttons/CloseButton";
import PrevImageButton from "../Common/Buttons/PrevImageButton";
import NextImageButton from "../Common/Buttons/NextImageButton";
import DownloadButton from "../Common/Buttons/DownloadButton";

const ModalImage = ({image, setModal}) => {
    if (image.isShow) {
        const onClickSetBigImage = (e) => {
            if (e.target.className === 'background-big-image') setModal();
        };

        return (
            <div className='background-big-image'
                 key={image}
                 onClick={onClickSetBigImage}>

                <PrevImageButton onClick={()=>alert("prev")}/>
                <NextImageButton onClick={()=>alert("next")}/>

                <CloseButton onClick={setModal} />
                <DownloadButton url={image.hdurl} />

                <div className='big-image'>
                    <img src={image.url} alt=''/>
                    <p>{image.title} [ {image.date} ]</p>
                </div>
            </div>
        )
    } else return (<></>);
};

export default ModalImage;
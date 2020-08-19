import React from 'react';
import Picture from './Picture/Picture';
import Preloader from "../Preloader/Preloader";
import {trackWindowScroll} from 'react-lazy-load-image-component';


const GridPictures = ({imgArray, setBigImage, scrollPosition}) => {

    let pictures = imgArray.filter(i => i.title)
        .map((i, id) => <Picture key={id}
                                 setBigImage={setBigImage}
                                 scrollPosition={scrollPosition}
                                 img={i}/>);

    return (
        <>
            {imgArray.length === 0
                ? <Preloader/>
                : <div className='App-all-content'>
                    {!imgArray ? '' : pictures}
                </div>}
        </>
    )
};

export default trackWindowScroll(GridPictures);
import React from 'react';
import Picture from './Picture/Picture';
import Preloader from "../Preloader/Preloader";


const GridPictures = ({imgArray, setModal, isLoad}) => {

    const pictures = imgArray
        .map((i, id) => <Picture key={id}
                                 setBigImage={setModal}
                                 img={i}/>);

    return (
        <>
            {isLoad
                ? <Preloader/>
                : <div className='App-all-content'>
                    {!imgArray ? '' : pictures}
                </div>}
        </>
    )
};

export default GridPictures;
import React from 'react';
import Picture from './Picture/Picture';
import Preloader from "../Common/Preloader/Preloader";


const GridPictures = ({imgArray, setModal, isLoad}) => {



    const pictures = imgArray
        .map((i, id) => <Picture key={id}
                                 id={id}
                                 imgArray={imgArray}
                                 setModal={setModal}
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
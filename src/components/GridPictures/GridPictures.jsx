import React from 'react';
import Picture from './Picture/Picture';
import Preloader from "../Preloader/Preloader";


const GridPictures = ({imgArray, setBigImage}) => {

    let pictures = imgArray.filter(i => i.title)
        .map((i, id) => <Picture key={id}
                                 setBigImage={setBigImage}
                                 src={i.url}
                                 date={i.date}
                                 title={i.title}/>);

    return (
        <>{imgArray.length === 0
            ? <Preloader/>
            : <div className='App-all-content'>
                {!imgArray ? '' : pictures}
            </div>}
        </>
    )
};

export default GridPictures;
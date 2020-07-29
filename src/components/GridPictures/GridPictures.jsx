import React from 'react';
import Picture from "./Picture/Picture";


const GridPictures = ({imgArray}) => {

    let pictures = imgArray.map((item) => <Picture src={item}/>);

    return (
        <div className='App-all-content'>
            {!imgArray ? ""
                : pictures}
        </div>
    )
};

export default GridPictures;
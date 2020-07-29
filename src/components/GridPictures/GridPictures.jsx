import React from 'react';
import Picture from './Picture/Picture';


const GridPictures = ({imgArray}) => {

    let pictures = imgArray.filter(i => i.title).map((i,id) => <Picture key={id}
                                                                        src={i.url}
                                                                        date={i.date}
                                                                        title={i.title}/>);

    return (
        <div className='App-all-content'>
            {!imgArray ? '' : pictures}
        </div>
    )
};

export default GridPictures;
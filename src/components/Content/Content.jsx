import React from 'react';

const Content = ({img}) => {

    return (
        <div className="App-content">
            <img src={img.hdurl} alt={img.title}/>
            <span>{img.title}</span>
        </div>
    );
};

export default Content;

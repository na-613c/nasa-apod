import React from 'react';
import preloader from '../../images/Preloader.gif'


const Preloader = () => {
    return (
        <div className='preloader'>
            <img src={preloader} alt="preloader"/>
        </div>
    )
};

export default Preloader;
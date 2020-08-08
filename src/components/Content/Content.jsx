import React from 'react';

const Content = ({img, setBigImage}) => {

    return (
        <div className='App-content'>
            <img onClick={() => setBigImage(img.hdurl)}
                 src={img.hdurl}
                 alt={img.title}
                 title={!img.title ? '' : 'Нажмите для увеличения'}/>

            <span><b>{!img.title ? 'Данных нет' : img.title}</b></span>
            <p>{!img.date ? 'Возможно дата еще не наступила или нет сохраненных данных' : img.date}</p>
        </div>
    );
};

export default Content;

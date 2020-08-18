import React, {useState} from 'react';
import Preloader from "../Preloader/Preloader";

const Content = ({img, setBigImage}) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className='App-content'>
            <div className='Content-img'>
                {img.hdurl === null
                    ? <Preloader/>
                    : <img onClick={() => setBigImage(img)}
                           onMouseEnter={() => setIsShown(true)}
                           onMouseLeave={() => setIsShown(false)}
                           src={img.hdurl}
                           alt={img.title}
                           title={!img.title ? '' : 'Нажмите для увеличения'}/>
                }
            </div>
            {!isShown && img.hdurl !== null && (
                <Text title={!img.title ? 'Данных нет' : img.title}
                      date={!img.date ? 'Возможно дата еще не наступила или нет сохраненных данных' : img.date}
                      explanation={!img.explanation ? '' : img.explanation}/>
            )}
        </div>
    );
};

const Text = ({title, date, explanation}) => {
    return (
        <>
            <span><b>{title}</b></span>
            <p>{date}</p>
            <p className='Explanation'>{explanation}</p>
        </>
    )
};

export default Content;

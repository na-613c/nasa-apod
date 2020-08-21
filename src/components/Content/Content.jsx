import React, {useState} from 'react';
import Preloader from "../Common/Preloader/Preloader";

const Content = ({img, setModal}) => {
    const [isHide, setIsHide] = useState(true);
    return (
        <div className='App-content'>
            <div className='Content-img'>
                {img.isLoad
                    ? <Preloader/>
                    : <img onClick={() => setModal([img])}
                           onMouseOver={() => setIsHide(false)}
                           onMouseOut={() => setIsHide(true)}
                           src={img.url}
                           alt={img.title}
                           title={!img.title ? '' : 'Нажмите для увеличения'}/>
                }
            </div>
            {(isHide && !img.isLoad) && (
                <Text title={img.title}
                      date={img.date}
                      explanation={img.explanation}/>
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

import React, {useState} from 'react';
import Preloader from "../Common/Preloader/Preloader";
import ImageVideoFlow from "../Common/ImageVideoFlow/ImageVideoFlow";

const Content = ({img, setModal}) => {
    const [isHide, setIsHide] = useState(true);

    return (
        <div className='App-content'>
            <div className='Content-img'>
                {img.isLoad
                    ? <Preloader/>
                    : <ImageVideoFlow media_type={img.media_type}
                                      title={'Нажмите для увеличения'}
                                      url={img.url}
                                      onClick={() => setModal([img])}
                                      onMouseOver={() => setIsHide(false)}
                                      onMouseOut={() => setIsHide(true)}/>

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
        <div className='info'>
            <span><b>{title}</b></span>
            <p>{date}</p>
            <p className='Explanation'>{explanation}</p>
        </div>
    )
};

export default Content;

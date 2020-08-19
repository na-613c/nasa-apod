import React, {useEffect, useState} from 'react';
import CalendarContainer from './components/Calendar/CalendarContainer';
import GridPictures from './components/GridPictures/GridPictures';
import BigImage from './components/BigImage/BigImage';
import Content from './components/Content/Content';
import defaultImages from './images/not_found.gif'
import {getPicture} from './api/api';
import 'react-calendar/dist/Calendar.css';
import './App.css';


const App = () => {

    const initImgState = {
        url: null,
        hdurl: null,
        title: 'Загрузка',
        date: '',
        explanation: ''
    };

    const [img, setImg] = useState(initImgState);
    const [month, setMonth] = useState([]);
    const [isModal, setModal] = useState(false);
    const [bigImg, setBigImg] = useState(initImgState);

    const setModalImage = () => {
        isModal ? setModal(false) : setModal(true);
    };

    const getDate = () => {
        return !localStorage.getItem('date')
            ? new Date()
            : new Date(localStorage.getItem('date'));
    };

    useEffect(() => {
        queryOneImg(getDate());
        queryMonthImg(getDate());
    }, []);

    const queryOneImg = async (value) => {
        return setImg(await query(value));
    };

    const queryMonthImg = async (date = new Date()) => {
        let daysInMonth = 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
        let currentImg = [];
        for (let i = 1; i <= daysInMonth; i++) {
            let currentDate = new Date(date.getFullYear(), date.getMonth(), i);
            currentImg.push(await query(currentDate));
        }

        Promise.all(currentImg).then(response =>setMonth(response));
        return currentImg
    };

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${year}-${month}-${day}`;
    };

    const query = async (value) => {
        const response = await getPicture(formatDate(value));
        let url = !response.url ? defaultImages : response.url;
        return {
            url: !response.hdurl ? defaultImages : url,
            hdurl: !response.hdurl ? url : response.hdurl,
            title: response.title,
            date: response.date,
            explanation: response.explanation
        };
    };

    let onChange = (value) => {
        setImg(initImgState);
        const localDate = formatDate(value);
        const currentDate = formatDate(new Date());

        localDate === currentDate
            ? localStorage.removeItem('date')
            : localStorage.setItem('date', value);

        queryOneImg(value);
    };

    const onActiveStartDateChange = ({activeStartDate, value, view}) => {
        setMonth([]);
        console.log(activeStartDate);
        queryMonthImg(activeStartDate);
    };

    const setBigImage = (img) => {
        setBigImg(img);
        return setModalImage()
    };

    return (
        <div className='App-wrapper'>
            <CalendarContainer
                onChange={onChange}
                onActiveStartDateChange={onActiveStartDateChange}
                value={getDate()}/>
            <Content img={img} setBigImage={setBigImage}/>
            <GridPictures imgArray={[...month]} setBigImage={setBigImage}/>
            <BigImage src={bigImg} isModal={isModal} setBigImage={setModalImage}/>
        </div>
    )
};

export default App;

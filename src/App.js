import React, {useEffect, useState} from 'react';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import CalendarContainer from "./components/Calendar/CalendarContainer";
import Content from "./components/Content/Content";
import {getPicture} from "./api/api";
import defaultImages from './images/not_found.gif'
import GridPictures from "./components/GridPictures/GridPictures";

const App = () => {
    const [img, setImg] = useState({});
    const [month, setMonth] = useState([]);

    const getDate = () => {
        return !localStorage.getItem('date')
            ? new Date()
            : new Date(localStorage.getItem('date'));
    };

    useEffect(() => {
        queryOneImg(getDate());
        queryMonthImg();
    }, []);

    useEffect(() => {
    }, [month]);

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

        Promise.all(currentImg).then(response => setMonth(response));
        return currentImg
    };

    const query = async (value) => {
        const day = value.getDate();
        const month = value.getMonth() + 1;
        const year = value.getFullYear();

        const selectedDate = `${year}-${month}-${day}`;
        const response = await getPicture(selectedDate);

        let url = !response.url ? defaultImages : response.hdurl

        return {
            url: !response.hdurl ? defaultImages : url,
            hdurl: !response.hdurl ? defaultImages : response.hdurl,
            title: response.title
        };
    };

    let onChange = (value) => {
        localStorage.setItem('date', value);
        queryOneImg(value);
    };


    const onActiveStartDateChange = ({activeStartDate, value, view}) => {
        queryMonthImg(activeStartDate);
    };


    return (
        <div className="App-wrapper">
            <CalendarContainer
                onChange={onChange}
                onActiveStartDateChange={onActiveStartDateChange}
                value={getDate()}/>
            <Content img={img}/>
            <GridPictures imgArray={[...month]}/>
        </div>
    )
};

export default App;

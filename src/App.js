import React, {useEffect, useState} from 'react';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import CalendarContainer from "./components/Calendar/CalendarContainer";
import Content from "./components/Content/Content";
import {getPicture} from "./api/api";

const App = () => {

    let onChange = (value) => {
        localStorage.setItem('date', value);
        query(value);
    };

    const query = async (value) => {
        const day = value.getDate();
        const month = value.getMonth() + 1;
        const year = value.getFullYear();
        const selectedDate = `${year}-${month}-${day}`;
        const response = await getPicture(selectedDate);
        let imgUrl = !response.hdurl ? '' : response.hdurl;
        setImg(imgUrl);
    };

    const [img, setImg] = useState();


    useEffect(() => {
        const now = !localStorage.getItem('date')
            ? new Date()
            : new Date(localStorage.getItem('date'));
        query(now);
    }, []);


    return (
        <div className="App-wrapper">
            <CalendarContainer onChange={onChange}/>
            <Content img={img}/>
        </div>
    )
};

export default App;

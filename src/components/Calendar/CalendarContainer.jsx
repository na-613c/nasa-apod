import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarContainer = ({onChange}) => {

    return (
        <div className="App-calendar">
          <Calendar onChange={onChange}/>
        </div>
    );
};

export default CalendarContainer;

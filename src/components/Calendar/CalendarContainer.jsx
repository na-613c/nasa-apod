import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarContainer = (props) => {

    return (
        <div className="App">
          <Calendar onChange={props.onChange}/>
        </div>
    );
};

export default CalendarContainer;

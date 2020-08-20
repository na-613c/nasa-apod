import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarContainer = ({onActiveStartDateChange, onChange, value}) => {

    return (
        <div className='App-calendar'>
            <Calendar
                onChange={onChange}
                value={value}
                onActiveStartDateChange={onActiveStartDateChange}
            />
        </div>
    );
};

export default CalendarContainer;

import React from 'react';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import CalendarContainer from "./components/Calendar/CalendarContainer";

const App = () => {
    let onChange = (value) => {
      const day = value.getDate();
      const month = value.getMonth() + 1;
      const year = value.getFullYear();
        const selectedDate = `${year}-${month}-${day}`;
        return alert(selectedDate)
    };

    return (
        <div className="App">
            <CalendarContainer onChange={onChange}/>
        </div>
    );
};

export default App;

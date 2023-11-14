import React, {useState} from "react";
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const DatePicker=()=>{
    const [selectedDate,setDate]=useState(null);
    return(
        <div className="date-picker-container">
            <Datepicker selected={selectedDate} onChange={date=>setDate(date)}/>
        </div>
    )
}

export default DatePicker
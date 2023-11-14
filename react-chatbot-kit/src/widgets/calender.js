import React,{useState} from "react";
import { createChatBotMessage } from "react-chatbot-kit";
const CalenderWidget=(props)=>{
    const [selectedDate,setSelectedDate]=useState(null);

    const handleDateSelect=(date)=>{
        setSelectedDate(date);
        props.actionProvider.handleDateSelect(date);

    };

    const renderCalender=()=>{
        const calenderDays=[];
        for (let day=1;day<=daysInMonth;day++){
            CalendarViewDaySharp.push(
                <button key={day} onClick={()=>handleDateSelect(day)}>
                    {day}
                </button>
            )
        }
        return calenderDays;
    };

    return (
        <div>
            <p>pick a date:</p>
            <div>
                <button onClick={()=>setCurrentMonth(new Date(currentMonth.getFullYear(),currentMonth.getMonth()-1))}>
                    Previous Month
                </button>
                <span>{currentMonth.toLocaleString('default',{month:'long',year:'numeric'})}</span>
                <button onClick={()=>setCurrentMonth(new Date(currentMonth.getFullYear(),currentMonth.getMonth()+1))}>
                    Next Month
                </button>
            </div>
            <div>
                {renderCalender()}
            </div>
            <div>
                <button onClick={()=>props.actionProvider.handleExit()}>Exit</button>
            </div>
        </div>
    )
}
export default CalenderWidget
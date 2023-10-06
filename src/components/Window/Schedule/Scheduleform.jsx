import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './assets/Scheduleform.css'
import { AiOutlineRight } from 'react-icons/ai';

const Scheduleform = ({schedule_booked}) => {

  const [classValue, setClassValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [dateValue, setDateValue] = useState();
  const [focusValue, setFocusValue] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    schedule_booked()
  }

  return (
    <div className='Bookingform_right'>
      <form className='form' onSubmit={(e)=>handleSubmit(e)}>
        <div className="form-group">
          <label  className='label' htmlFor="classInput">Class *</label>
          <input
            className='input'
            placeholder='Chemistry'
            type="text"
            id="classInput"
            value={classValue}
            onChange={(e) => setClassValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className='label' htmlFor="timeInput">Amount of Time *</label>
          <input
            className='input'
            type="text"
            id="timeInput"
            placeholder='30 minutes'
            value={timeValue}
            onChange={(e) => setTimeValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className='label' htmlFor="dateInput">Date *</label>
          <DatePicker
            id="dateInput"
            className='input'
            selected={dateValue}
            onChange={(date) => {
              setDateValue(date)
            }}
          />
        </div>

        <div className="form-group">
          <label className='label' htmlFor="focusInput">What do you want to focus on ?</label>
          <input
            type="text"
            id="focusInput"
            placeholder='Review Thermodynamics lesson 4 go over new lesson'
            value={focusValue}
            onChange={(e) => setFocusValue(e.target.value)}
          />
        </div>
        
        <button type="submit" className='submitbutton' >Schedule
        <AiOutlineRight></AiOutlineRight>
        </button>
        
      </form>

    </div>
  )
}

export default Scheduleform;

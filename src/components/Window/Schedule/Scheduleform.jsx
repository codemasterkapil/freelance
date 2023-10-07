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
        
        <div className="form_group">
          <p>Class *</p>
          <input 
            type="text" 
            placeholder='Chemistry'
            value={classValue}
            className="input1"
            onChange={(e) => setClassValue(e.target.value)}
          />
        </div>

        <div className="form_group">
          <p>Amount of time *</p>
          <input 
            type="text" 
            placeholder='30 minute'
            className="input1"
          />
        </div>

        <div className="form_group">
          <p>Date *</p>
          <input 
            type="date"
            className="input1"
          />
        </div>

        <div className="form_group">
          <p>What do you want to focus on?</p>
          <input 
            type="text" 
            placeholder='Review thermodynamics lesson 4 - go over new lesson'
            className="input2"
          />
        </div>

        <div className="button_container_schedule">
          <button type="submit" className='submitbutton' >Schedule
          <AiOutlineRight></AiOutlineRight>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Scheduleform;

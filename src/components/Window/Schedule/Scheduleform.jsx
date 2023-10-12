import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './assets/Scheduleform.css'
import { AiOutlineRight } from 'react-icons/ai';

const Scheduleform = ({schedule_booked}) => {

  const [classValue, setClassValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [focusValue, setFocusValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(timeValue==='' || classValue==='' || dateValue===''){
      setError(true);
    }else{
      console.log('hello')
      // api call
    }
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
          {
             error && <p className='error_bookingForm'>Class cannot be empty </p>
          }
        </div>

        <div className="form_group">
          <p>Amount of time *</p>
          <input 
            type="text" 
            placeholder='30 minute'
            className="input1"
            onChange={(e) => setTimeValue(e.target.value)}
          />
           {
             error && <p className='error_bookingForm'>Time cannot be empty </p>
           }
        </div>

        <div className="form_group">
          <p>Date *</p>
          <input 
            type="date"
            className="input1"
            onChange={(e) => setDateValue(e.target.value)}
          />
           {
             error && <p className='error_bookingForm'>Date cannot be empty </p>
           }
        </div>

        <div className="form_group">
          <p>What do you want to focus on?</p>
          <input 
            type="text" 
            placeholder='Review thermodynamics lesson 4 - go over new lesson'
            className="input2"
            onChange={(e) => setFocusValue(e.target.value)}
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

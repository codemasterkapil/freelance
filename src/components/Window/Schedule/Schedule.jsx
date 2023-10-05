import React from 'react'
import Bookingcontent from './Schedulecontent'
import Bookingform from './Scheduleform'
import './assets/Schedule.css';

const Schedule = () => {
  return (
    <div className='component'>
        <Bookingcontent></Bookingcontent>
        <Bookingform></Bookingform>      
    </div>
  )
}

export default Schedule;

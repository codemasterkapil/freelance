import { useState } from 'react'
import Bookingcontent from './Schedulecontent'
import Bookingform from './Scheduleform'
import './assets/Schedule.css';
import Cross from '../../Cross/Cross';

const Schedule = ({handle_ScheduleVisible}) => {
  return (
    <div className="compnent_container">
      <Cross window_cut={handle_ScheduleVisible}/>
      <div className='component'>
          <Bookingcontent></Bookingcontent>
          <Bookingform handle_ScheduleVisible={handle_ScheduleVisible}/>   
      </div>
    </div>
  )
}

export default Schedule;
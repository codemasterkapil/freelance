
import ReactLoading from "react-loading";

import { useState } from 'react'
import Bookingcontent from './Schedulecontent'
import Bookingform from './Scheduleform'
import './assets/Schedule.css';
import Cross from '../../Cross/Cross';
<<<<<<< HEAD

const Schedule = ({ handle_ScheduleVisible }) => {

  const [done, setDone] = useState(false);

  const schedule_booked = () => {
    setDone(true);
  }


  return (

    <div className="component_container">
      <Cross window_cut={handle_ScheduleVisible} />
      <div className='component'>
        {done && (
        <div className="component-loader">
          <ReactLoading
            type={"bars"}
            color={"white"}
            height={100}
            width={100}
            
          />
          </div>)
        }
        <Bookingcontent></Bookingcontent>
        <Bookingform schedule_booked={schedule_booked}></Bookingform>
=======

const Schedule = ({handle_ScheduleVisible}) => {
  return (
    <div className="compnent_container">
      <Cross window_cut={handle_ScheduleVisible}/>
      <div className='component'>
          <Bookingcontent></Bookingcontent>
          <Bookingform></Bookingform>      
>>>>>>> 5a8f7647acd59d4a80555c3d64e9076dfa1bbd01
      </div>
    </div>
  )
}

export default Schedule;

import ReactLoading from "react-loading";

import { useState } from 'react'
import Bookingcontent from './Schedulecontent'
import Bookingform from './Scheduleform'
import './assets/Schedule.css';
import Cross from '../../Cross/Cross';

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
      </div>
    </div>
  )
}

export default Schedule;
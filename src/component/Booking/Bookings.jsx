import React from 'react'
import Bookingcontent from './Bookingcontent'
import Bookingform from './Bookingform'
import './Bookings.css';

const Bookings = () => {
  return (
    <div className='component'>
        <Bookingcontent></Bookingcontent>
        <Bookingform></Bookingform>      
    </div>
  )
}

export default Bookings

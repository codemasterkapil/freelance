import React from 'react'
import './assets/Schedulecontent.css'

const Schedulecontent = () => {
  return (
    <div className='Bookingcontent_left'>
      <div className="inner">
        <div className="Bookingcontent_heading">
          <p>Scheduling a</p>
          <p>Block</p>
        </div>

        <div className="Bookingcontent">
          <p className='sub_Bookingcontent_heading'>Fun Fact:Planning is Key!</p>
          <p className='description'>
            Actively planning your study time enhances memory retention and boosts productivity!
          </p>
          <p className='description'>
            Scheduled lessons reinforce understanding, making study blocks more effective
          </p>
        </div>
      </div>
    </div>
  )
}

export default Schedulecontent;

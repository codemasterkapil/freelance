import React from 'react'
import {MdDone} from 'react-icons/md';
import {RxCross1} from 'react-icons/rx';
import '../../components/Quiz/assets/Ticked.css';


const Ticked = ({con}) => {
  return (
    <>
        {con?<MdDone  className='ticked-sign' style={{color:'green'}}/>:<RxCross1  className='ticked-sign' style={{color:'red'}} />}
    </>
  )
}

export default Ticked

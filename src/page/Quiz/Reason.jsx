import React from 'react'
import '../../components/Quiz/assets/Reason.css';


const Reason = ({option}) => {
    
  return (
    <div className='reason-container'>
        <p className={`reason-para${option.decision?"Correct":"wrong"}`}>{option.decision?"Correct":"Incorrect"}</p>
        <p className='reason-container-p2'>{option.exp}</p>
    </div>
  )
}

export default Reason

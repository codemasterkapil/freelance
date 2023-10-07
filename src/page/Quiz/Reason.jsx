import React from 'react'
import '../../components/Quiz/assets/Reason.css';


const Reason = ({option}) => {
    
  return (
    <div className='reason-container'>
        <p className={`reason-para${option.decision?"Correct":"wrong"}`}>{option.decision?"Correct":"Incorrect"}</p>
        <p>{option.exp}</p>
    </div>
  )
}

export default Reason

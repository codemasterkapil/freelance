import React, { useState } from 'react'
import "./assets/StudyWhat.css"
import Dropdown from './Dropdown.jsx'
import Cross from '../../Cross/Cross';
import { AiOutlineRight } from 'react-icons/ai';

const StudyWhat = ({ handle_StudyWhatVisible, handle_StudyHowVisible }) => {

  const [radioValue, setRadioValue] = useState(null);

  const subjects = ["physics", "chemistry", "maths"]
  const units = ['1', '2', '3', '4'];
  const lesson = ["l1", "l2", "l3"];

  return (
    <div className="StudyWhat_container_outer">
      <Cross window_cut={handle_StudyWhatVisible} />
      <div className='StudyWhat_container'>
        <div className="StudyWhat">
          <img className='inverted_puka' src={require("../../../assets/pucka.png")} alt="" />
          <p className="StudyWhat_heading">What do you want to study?</p>
          <div className="material_type">
            <p className="material_type_heading">material_type *</p>
            <div className="radio1">
              <input
                type="radio"
                checked={radioValue === "past"}
                onChange={() => setRadioValue("past")}
              />
              <p className='radio-par'>Past Lesson</p>
            </div>
            <div className="radio1">
              <input
                type="radio"
                checked={radioValue === "new"}
                onChange={() => setRadioValue("new")}
              />
              <p className='radio-par'>New Lesson</p>
            </div>

          </div>

          <div className="select_subject">
            <div className="dd1">
              <Dropdown options={subjects} type={"Subject"} />
            </div>
            <div className="dd1">
              <Dropdown options={units} type={"Unit"} />
            </div>
            <div className="dd1">
              <Dropdown options={lesson} type={"Lesson"} />
            </div>
          </div>

          <button type="submit" className='study_now' onClick={() => {
            handle_StudyWhatVisible(false);
            handle_StudyHowVisible(true)
          }}>
            start studying
            <AiOutlineRight className='arrow'></AiOutlineRight>
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudyWhat;

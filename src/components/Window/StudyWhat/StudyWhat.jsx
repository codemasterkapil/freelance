import React, { useState } from 'react'
import "./assets/StudyWhat.css"
import Dropdown from './Dropdown.jsx'
import Cross from '../../Cross/Cross';
import { AiOutlineRight } from 'react-icons/ai';

const StudyWhat = ({ handle_StudyWhatVisible, handle_StudyHowVisible }) => {

  const [material, setMaterial] = useState(null);
  const [subject, setSubject] = useState(null);
  const handle_subject = (val) => {
    setSubject(val);
    setSubjectType(true);
  }
  const [unit, setUnit] = useState(null);
  const handle_unit = (val) => {
    setUnit(val);
    setUnitType(true);
  }
  const [lesson, setLesson] = useState(null);
  const handle_lesson = (val) => {
    setLesson(val);
  }

  const subject_option = ["physics", "chemistry", "maths"]
  const unit_option = ['1', '2', '3', '4'];
  const lesson_option = ["l1", "l2", "l3"];


  const [matrialTyple, setMaterialType] = useState(false);
  const [subjectType, setSubjectType] = useState(false);
  const [unitType, setUnitType] = useState(false);
  


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
                checked={material === "past"}
                onChange={() => {
                  setMaterial("past")
                  setMaterialType(true);
                }}
              />
              <p className='radio-par'>Past Lesson</p>
            </div>
            <div className="radio1">
              <input
                type="radio"
                checked={material === "new"}
                onChange={() => {
                  setMaterial("new");
                  setMaterialType(true);
                }}
              />
              <p className='radio-par'>New Lesson</p>
            </div>

          </div>

          <div className="select_subject">
            <div className="dd1">
              <Dropdown 
                options={subject_option} 
                type={"Subject"} 
                disable_val={matrialTyple}
                handle_option={handle_subject}  
              />
            </div>
            <div className="dd1">
              <Dropdown 
                options={unit_option} 
                type={"Unit"} 
                disable_val={subjectType}
                handle_option={handle_unit}  
              />
            </div>
            <div className="dd1">
              <Dropdown 
                options={lesson_option} 
                type={"Lesson"} 
                disable_val={unitType}
                handle_option={handle_lesson}  
              />
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

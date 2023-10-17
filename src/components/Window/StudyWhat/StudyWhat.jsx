import React, { useState } from 'react'
import "./assets/StudyWhat.css"
import Dropdown from './Dropdown.jsx'
import Cross from '../../Cross/Cross';
import { AiOutlineRight } from 'react-icons/ai';
import { AccountContext } from "../../../Context/AccountProvider.jsx"
import { useContext } from 'react';
import { useEffect } from 'react';
import axios, { all } from 'axios';

const StudyWhat = ({ handle_StudyWhatVisible, handle_StudyHowVisible }) => {

  //loading token
  const { person, studentCourses } = useContext(AccountContext);


  //subject

  const subject_option = []
  const subject_id = new Map();
  for (let i = 0; i < studentCourses.length; i++) {
    console.log("tarun", studentCourses[i]);
    subject_option.push(studentCourses[i].course.course);
    subject_id.set(studentCourses[i].course.course, studentCourses[i].courseId);
  }


  const [subject, setSubject] = useState(null);
  const handle_subject = (val) => {
    setSubject(val);
    setSubjectType(true);
    fetch_courses(val);
  }
  //fetching course data
  const fetch_courses = async (val) => {
    console.log(JSON.parse(window.sessionStorage.getItem("ALBy_student_token")));
    axios.get("http://54.232.139.4:5000/api/student/lessons", {
      headers: {
        "Authorization": `Beared ${JSON.parse(window.sessionStorage.getItem("ALBy_student_token")).token}`,
        "Content-Type": "Application/json"
      }
    })
      .then(res => {
        setAllCourses(res.data.responseObject.courses);

        unit_id.clear();

        res.data.responseObject.courses.map((curr_subject) => {
          console.log("finally", curr_subject)
          if (curr_subject.courseId === subject_id.get(val)) {
            const temp = [];
            const temp_unit = [];

            curr_subject.units.map((curr_unit) => {
              console.log(curr_unit);
              temp.push(curr_unit.unitName);
              temp_unit.push(curr_unit);
              unit_id.set(curr_unit.unitName, curr_unit.unitId)
              console.log(unit_id);
            })
            set_unit_option(temp);
            setAllUnits(temp_unit);
            console.log(unit_id);
          }
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  //unit 
  const [unit, setUnit] = useState(null);
  const [unit_option, set_unit_option] = useState([]);
  var unit_id = new Map();
  const handle_unit = (val) => {
    setUnit(val);
    setUnitType(true);

    console.log(val);
    console.log(unit_id);

    lesson_id.clear();
    const temp = [];
    allUnits.map((curr_unit) => {
      console.log(curr_unit);
      console.log(curr_unit.unitId, unit_id.get(val));
      if (curr_unit.unitName === val) {
        curr_unit.lessons.map((curr_lesson) => {
          console.log(curr_lesson)
          temp.push(curr_lesson.lessonName);
          lesson_id.set(curr_lesson.lessonName, curr_lesson.lessonId);
        })
      }
    })
    set_lesson_option(temp);
  }

  //lesson
  const [lesson, setLesson] = useState(null);
  const handle_lesson = (val) => {
    setLesson(val);
  }

  



  const [allCourses, setAllCourses] = useState([]);
  const [allUnits, setAllUnits] = useState([]);

  
  const [lesson_option, set_lesson_option] = useState([]);
  const lesson_id = new Map();







  useEffect(() => {
    console.log(person, 1);

  }, [person]);


  const [material, setMaterial] = useState(null);


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

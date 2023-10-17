import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './assets/Scheduleform.css'
import { AiOutlineRight } from 'react-icons/ai';
import { AccountContext } from '../../../Context/AccountProvider';
import { useContext } from 'react';
import Dropdown from '../StudyWhat/Dropdown';
import axios from "axios";

const Scheduleform = ({ handle_ScheduleVisible }) => {

  const [course, setCourse] = useState(null);
  const [title, setTitle] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  const [dateValue, setDateValue] = useState(null);
  const [description, setDescription] = useState(null);
  const [error, setError] = useState(false);
  const {setLoading, setLoadingMessage, setPopUp, setPopUpType, setPopUpMessage, person, studentCourses} = useContext(AccountContext);

  const courses_type = [];
  const course_id = new Map();
  for(let i=0; i<studentCourses.length; i++){
    courses_type.push(studentCourses[i].course.course);
    course_id.set(studentCourses[i].course.course, studentCourses[i].courseId);
  }
  const handle_courses = (val) => {
    setCourse(val);
  } 

  console.log(studentCourses);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!course || !title || !timeValue || !dateValue) {
      setError(true);
    } else {
      setLoading(true);
      console.log(typeof(timeValue));
      setLoadingMessage("Please wait Block in sheduling");
      axios.post("http://54.232.139.4:5000/api/calender/createStudentEvent", {
          "title": title,
          "description": description,
          "isCompleted": false,
          "courseId": course_id.get(course),
          "date": dateValue,
          "amountOfTime": timeValue
      }, {
        headers: {
          "Authorization": `Bearer ${JSON.parse(window.sessionStorage.getItem("ALBy_student_token")).token}`,
          "content-Type": 'application/json'
        }
      })
      .then(res => {
        console.log(res);
        setLoading(false);
        handle_ScheduleVisible(false);
        setPopUp(true);
        setPopUpMessage("Block successfully scheduled");
        setPopUpType("success");
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        setPopUp(true);
        setPopUpMessage("Block scheduling failed");
        setPopUpType("");
      })
    }
  }

  return (
    <div className='Bookingform_right'>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>

        <div className="form_group">
          <div className="dd">
            <Dropdown 
              options={courses_type}
              handle_option={handle_courses}
              type={"course"}
              disable_val={true}
            />
          </div>
          {
            (error && (!course)) && <p className='error_bookingForm'>course cannot be empty </p>
          }
        </div>

        <div className="form_group">
          <p>Title *</p>
          <input
            type="text"
            className="input1"
            placeholder='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {
            (error && (!title)) && <p className='error_bookingForm'>Title cannot be empty </p>
          }
        </div>

        <div className="form_group">
          <p>Amount of time *</p>
          <input
            type="number"
            placeholder='30 minute'
            className="input1"
            value={timeValue}
            onChange={(e) => setTimeValue(e.target.value)}
          />
          {
            (error && (!timeValue)) && <p className='error_bookingForm'>Time cannot be empty </p>
          }
        </div>


        <div className="form_group">
          <p>Date *</p>
          <input
            type="date"
            className="input1"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
          />
          {
            (error && (!dateValue)) && <p className='error_bookingForm'>Date cannot be empty </p>
          }
        </div>

        <div className="form_group">
          <p>Description</p>
          <textarea
            type="text"
            placeholder='Review thermodynamics lesson 4 - go over new lesson'
            className="input2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
          </textarea>
        </div>

        <div className="button_container_schedule">
          <button type="submit" className='submitbutton' >Schedule
            <AiOutlineRight></AiOutlineRight>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Scheduleform;

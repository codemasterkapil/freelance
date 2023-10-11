import "../../components/StudentDashboard/assets/StudentDashboard.css";
import Subject from "../../components/StudentDashboard/Subject.jsx"
import Calender from "../../components/Calender/Calender";
import { useState } from "react";

const StudentDashboard = ({ handle_ScheduleVisible, handle_StudyWhatVisible, student_data }) => {
    return (
        <div className="dashboard">
            <div className="dashboard_left">
                <p className="greetbox">Hi Vivan, lets power up you learning!</p>
                <Calender handle_popup={handle_ScheduleVisible} type={"student"} />
            </div>
            <div className="dashboard_right">
                <div className="dashboard_right_inner">
                    <p className="course_heading">Courses</p>
                    <div className="courses_container">
                        {student_data &&
                            student_data.responseObject.courses.map((course) => {
                                return <Subject course_data={course} />
                            })
                        }
                    </div>
                    {/* <div className="start_studying"> */}
                        <button 
                            onClick={() => {
                                handle_StudyWhatVisible(true);
                            }}
                            className="start_studying"
                            >Start studying
                        </button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard;
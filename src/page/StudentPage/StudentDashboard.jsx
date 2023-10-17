import "../../components/StudentDashboard/assets/StudentDashboard.css";
import Subject from "../../components/StudentDashboard/Subject.jsx"
import Calender from "../../components/Calender/Calender";
import { useState, useEffect } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { useContext } from "react";
import axios from "axios";

const StudentDashboard = ({ handle_ScheduleVisible, handle_StudyWhatVisible, student_data }) => {
    
    const [events_rare, set_events_rare] = useState({responseObject: {results: 0, result: {Events: [], Tests: [], Activities: []}}})

    const {person} = useContext(AccountContext);

    useEffect(() => {
        if(person){
            axios.get("http://54.232.139.4:5000/api/calender/createStudentEvent", {
                headers: {
                    "Authorization": `Bearer ${person.token}`, "content-Type": "Apptlication/json"
                }
            })
            .then(res => {
                set_events_rare(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
        }
    }, []);

    return (
        <div className="dashboard">
            <div className="dashboard_left">
                <p className="greetbox">Hi Vivan, lets power up you learning!</p>
                <Calender 
                    handle_popup={handle_ScheduleVisible} 
                    type={"student"} 
                    events_rare={events_rare}    
                />
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
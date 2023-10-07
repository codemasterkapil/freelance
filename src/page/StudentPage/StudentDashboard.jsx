import "../../components/StudentDashboard/assets/StudentDashboard.css";
import Subject from "../../components/StudentDashboard/Subject.jsx"
import Calender from "../../components/Calender/Calender";
import Filter from "../../components/Filter/Filter";
import { useState } from "react";

<<<<<<< HEAD
const StudentDashboard = ({ handle_ScheduleVisible, handle_StudyWhatVisible }) => {

    const [check, setCheck] = useState(false);
    const [birthday, setBirthday] = useState(false);
    const [school, setschool] = useState(false);
    const [tasks, setTasks] = useState(false);


=======
const StudentDashboard = ({ handle_ScheduleVisible, handle_StudyWhatVisible, student_data }) => {
>>>>>>> 5a8f7647acd59d4a80555c3d64e9076dfa1bbd01
    return (
        <div className="dashboard_container_oustside">
            <div className="dashboard">
                <div className="dashboard_container">
                    <div className="dashboard_left">
<<<<<<< HEAD
                        <div className="filter">
                            <input className="search" type="text" placeholder="search" />
                            <p>My courses</p>

                            <div className="filter_type">
                                <div className="checkbox">
                                    <input
                                        type="checkbox"
                                        checked={check}
                                        onChange={() => setCheck(!check)}
                                    />
                                    <p>Check</p>
                                </div>
                                <div className="checkbox">
                                    <input
                                        type="checkbox"
                                        checked={birthday}
                                        onChange={() => setBirthday(!birthday)}
                                    />
                                    <p>Birthday</p>
                                </div>
                                <div className="checkbox">
                                    <input
                                        type="checkbox"
                                        checked={school}
                                        onChange={() => setschool(!school)}
                                    />
                                    <p>School</p>
                                </div>
                                <div className="checkbox">
                                    <input
                                        type="checkbox"
                                        checked={tasks}
                                        onChange={() => setTasks(!tasks)}
                                    />
                                    <p>Tasks</p>
                                </div>
                            </div>

                            <button onClick={() => {
                                handle_ScheduleVisible(true);
                            }}>
                                Schedule block {">"}
                            </button>
                        </div>
=======
                        <Filter handle_ScheduleVisible={handle_ScheduleVisible}/>
>>>>>>> 5a8f7647acd59d4a80555c3d64e9076dfa1bbd01
                        <Calender />
                    </div>
                    <div className="dashboard_right_container">
                        <div className="dashboard_right">
                            {student_data && 
                                student_data.responseObject.courses.map((course) => {
                                    return <Subject course_data={course}/>
                                })
                            }
                        </div>
                        <button onClick={() => {
                            handle_StudyWhatVisible(true);
                        }}>
                            Start studying {">"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard;
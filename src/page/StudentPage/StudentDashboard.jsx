import "../../components/StudentDashboard/assets/StudentDashboard.css";
import Subject from "../../components/StudentDashboard/Subject.jsx"
import Calender from "../../components/Calender/Calender";
import Filter from "../../components/Filter/Filter";
import { useState } from "react";

const StudentDashboard = ({ handle_ScheduleVisible, handle_StudyWhatVisible }) => {
    return (
        <div className="dashboard_container_oustside">
            <div className="dashboard">
                <div className="dashboard_container">
                    <div className="dashboard_left">
                        <Filter handle_ScheduleVisible={handle_ScheduleVisible}/>
                        <Calender />
                    </div>
                    <div className="dashboard_right_container">
                        <div className="dashboard_right">
                            <Subject />
                            <Subject />
                            <Subject />
                            <Subject />
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
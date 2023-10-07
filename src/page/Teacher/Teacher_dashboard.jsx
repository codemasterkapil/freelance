import Teacher_greet from "../../components/Teacher_dasboard/Teacher_greet";
import "../../components/Teacher_dasboard/assets/Teacher_dashboard.css"
<<<<<<< HEAD
import Subject from "../../components/StudentDashboard/Subject";
import Calender from "../../components/Calender/Calender";
=======
import Teacher_subject from "../../components/Teacher_dasboard/Teacher_subject";
import Calender from "../../components/Calender/Calender";
import Filter from "../../components/Filter/Filter";
>>>>>>> 5a8f7647acd59d4a80555c3d64e9076dfa1bbd01

const Teacher_dashboard = ({ handle_ScheduleTestVisible, handle_AddcourseVisible, teacher_data }) => {
    return (
        <div className="teacher_dashboard_container">
            <Teacher_greet />
         
            <div className="teacher_dashboard">
<<<<<<< HEAD
                <div className="calender">
                     <Calender />
                </div> 
=======
                <div className="calender_parent_container">
                    <div className="schedule_test_button">
                        <button
                            onClick={() => handle_ScheduleTestVisible(true)}
                        >
                            Schdule test
                        </button>
                    </div>
                    <div className="calender_parent">
                        <Filter />
                        <Calender />
                    </div>
                </div>
>>>>>>> 5a8f7647acd59d4a80555c3d64e9076dfa1bbd01
                <div className="course_container">
                    <div className="add_button">
                        <button onClick={() => handle_AddcourseVisible(true)}>Add course +</button>
                    </div>
                    <div className="course">
                        {teacher_data && <Teacher_subject course_data={teacher_data.responseObject}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teacher_dashboard;
import Teacher_greet from "../../components/Teacher_dasboard/Teacher_greet";
import "../../components/Teacher_dasboard/assets/Teacher_dashboard.css"
import Teacher_subject from "../../components/Teacher_dasboard/Teacher_subject";
import Calender from "../../components/Calender/Calender";
import Filter from "../../components/Filter/Filter";

const Teacher_dashboard = ({ handle_ScheduleTestVisible, handle_AddcourseVisible, teacher_data }) => {
    console.log(teacher_data)
    return (
        <div className="teacher_dashboard_container">
            <Teacher_greet />
         
            <div className="teacher_dashboard">
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
                <div className="course_container">
                    <div className="add_button">
                        <button onClick={() => handle_AddcourseVisible(true)}>Add course +</button>
                    </div>
                    <div className="course">
                        {teacher_data && 
                            teacher_data.responseObject.courses.map((course) => {
                                return <Teacher_subject course_data={course}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teacher_dashboard;
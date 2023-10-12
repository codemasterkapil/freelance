import Teacher_greet from "../../components/Teacher_dasboard/Teacher_greet";
import "../../components/Teacher_dasboard/assets/Teacher_dashboard.css"
import Teacher_subject from "../../components/Teacher_dasboard/Teacher_subject";
import Calender from "../../components/Calender/Calender";
import Filter from "../../components/Filter/Filter";

const Teacher_dashboard = ({ handle_ScheduleTestVisible, handle_AddcourseVisible, teacher_data, handle_ReviewPdfVisible, handle_PdfUploadVisible }) => {
    console.log(teacher_data)
    return (
        <div className="dashboard">
            <div className="teacher_dashboard_left">
                <Calender handle_popup={handle_AddcourseVisible} type={"teacher"}/>
            </div>
            <div className="course_container">
                <div className="teacher_courses_container">
                    <div className="add_button">
                        <button
                            onClick={() => handle_AddcourseVisible(true)}
                        >Add course +</button>
                    </div>
                    <p className="course_heading">Courses</p>
                    <div className="teacher_course">
                        {teacher_data &&
                            teacher_data.responseObject.courses.map((course) => {
                                return <Teacher_subject course_data={course} handle_PdfUploadVisible={handle_PdfUploadVisible} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teacher_dashboard;
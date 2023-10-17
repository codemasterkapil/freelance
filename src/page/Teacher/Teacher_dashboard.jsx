import Teacher_greet from "../../components/Teacher_dasboard/Teacher_greet";
import "../../components/Teacher_dasboard/assets/Teacher_dashboard.css"
import Teacher_subject from "../../components/Teacher_dasboard/Teacher_subject";
import Calender from "../../components/Calender/Calender";
import { AccountContext } from "../../Context/AccountProvider";
import { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Teacher_dashboard = ({ handle_ScheduleTestVisible, handle_AddcourseVisible, handle_ReviewPdfVisible, handle_PdfUploadVisible }) => {

    const { teacher, teacherCourses } = useContext(AccountContext);
    const [events_rare, set_events_rare] = useState({ responseObject: { results: 0, result: { Events: [], Tests: [], Activities: [] } } })

    useEffect(() => {
        if (teacher) {
            axios.get("http://54.232.139.4:5000/api/calender/getTeacherEvents", {
                headers: {
                    "Authorization": `Bearer ${teacher.token}`,
                    "content-Type": "Apptlication/json"
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
            <div className="teacher_dashboard_left">
                <Calender
                    handle_popup={handle_ScheduleTestVisible}
                    type={"teacher"}
                    events_rare={events_rare}
                />
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
                        {teacherCourses &&
                            teacherCourses.map((course) => {
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
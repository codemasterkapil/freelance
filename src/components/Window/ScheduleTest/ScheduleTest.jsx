import "./assets/ScheduleTest.css"
import FormDesc from "../../FormDesc/FormDesc";
import Cross from "../../Cross/Cross";
import { useContext, useState } from 'react';
import Dropdown from "../StudyWhat/Dropdown.jsx"
import { AccountContext } from "../../../Context/AccountProvider";
import axios from "axios";


const ScheduleTest = ({ handle_ScheduleTestVisible }) => {

    const { teacher, teacherCourses } = useContext(AccountContext);
    console.log(teacherCourses)
    const [course, setCourse] = useState(null);
    const course_type = [];
    const course_id = new Map();
    for (let i = 0; i < teacherCourses.length; i++) {
        course_type.push(teacherCourses[i].course.course);
        course_id.set(teacherCourses[i].course.course, teacherCourses[i].courseId);
    }
    const handle_course = (val) => {
        setCourse(val);
    }
    const [title, setTitle] = useState(null);
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState(null);
    const [error, setError] = useState(false);


    const {setLoading, setLoadingMessage} = useContext(AccountContext);
    const {setPopUp, setPopUpMessage, setPopUpType} = useContext(AccountContext);

    const handleClick = () => {
        if (!course || !title || !date || !description) {
            setError(true);
        }
        else {
            setLoading(true);
            setLoadingMessage("Please wait we are adding test schedule")
            axios.post("http://54.232.139.4:5000/api/calender/createTeacherEvent", {
                "title": title,
                "description": description,
                "isCompleted": false,
                "courseId": course_id.get(course),
                "date": "20/10/2023"
            }, {
                headers: {
                    "Authorization": `Bearer ${teacher.token}`,
                    "Content-Type": "Application/json"
                }
            })
            .then(res => {
                console.log(res);
                setLoading(false);
                handle_ScheduleTestVisible(false);
                setPopUp(true);
                setPopUpMessage("Test successfully schedules");
                setPopUpType("success");
            }) 
            .catch(err => {
                console.log(err);
                setLoading(false);
                setPopUp(true);
                setPopUpMessage("successfully scheduling failed");
                setPopUpType("");
            })
        }
    }

    return (
        <div className='schedule_test_container'>

            <Cross window_cut={handle_ScheduleTestVisible} />

            <div className="schedule_test">
                <FormDesc text="Adding Test date" />


                <div className="add_course_form">
                    <div className="form_group fg1">
                        <div className="input">
                            <p style={{ color: "white", paddingBottom: "10px" }}>none</p>
                            <Dropdown
                                options={course_type}
                                handle_option={handle_course}
                                type={"course *"}
                                disable_val={true}
                            />
                            {(error && !course) && <p className="add_course_form_error">Class cannot be empty</p>}
                        </div>
                        <div className="input">
                            <label className="add_label" htmlFor="title">title *</label>
                            <input
                                type="text"
                                id="Location"
                                placeholder="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            {(error && !title) && <p className="add_course_form_error">title cannot be empty</p>}
                        </div>
                    </div>
                    <div className="form_group fg2">
                        <div className="input">
                            <label className="add_label" htmlFor="date">Date *</label>
                            <input
                                type="date"
                                id="date"
                                placeholder=""
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            {(error && !date) && <p className="add_course_form_error">date cannot be empty</p>}
                        </div>
                        <div className="input">
                            <label className="add_label" htmlFor="Desc">Description</label>
                            <input
                                type="text"
                                id="Desc"
                                placeholder="Description..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            {(error && !description) && <p className="add_course_form_error">description cannot be empty</p>}
                        </div>
                    </div>

                    <div className="add_course_button">
                        <button onClick={handleClick}>Schedule test</button>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default ScheduleTest;
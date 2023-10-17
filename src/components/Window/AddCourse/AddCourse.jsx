import "./assets/AddCourse.css"
import Cross from "../../Cross/Cross.jsx"
import FormDesc from "../../FormDesc/FormDesc";
import { useState } from 'react'
import { AccountContext } from "../../../Context/AccountProvider";
import { useContext } from "react";
import axios from "axios";

const AddCourse = ({ handle_AddcourseVisible }) => {

    const [Class, setClass] = useState(null);
    const [location, setLocation] = useState(null);
    const [section, setSection] = useState(null);
    const [block, setBlock] = useState(null);
    const [error, setError] = useState(false);

    const {setLoading} = useContext(AccountContext);
    const {setLoadingMessage} = useContext(AccountContext);
    const {setPopUp, setPopUpMessage, setPopUpType} = useContext(AccountContext);

    const {teacher, setTeacherCourses} = useContext(AccountContext);

    const handleClick = () => {
        setLoading(true);
        setLoadingMessage("Please wait while we are adding course");
        if (Class === null || section === null || block === null) {
            setError(true);
        } else {
            axios.post("http://54.232.139.4:5000/api/teacher/course", {
                    name: Class,
                    section: section,
                    block: block,
                    location: location
                },{
                    headers: {
                        "Authorization": `Bearer ${teacher.token}`,
                        "content-Type": 'application/json'
                    }
            })
            .then((Response) => {
                setLoading(false);
                handle_AddcourseVisible(false);
                setPopUp(true);
                setPopUpMessage("Course successfully added")
                setPopUpType("success")
            })
            .catch((err) => {
                console.log(err);
                setPopUp(true);
                setPopUpMessage("Course not add please try again")
                setPopUpType("")
            })
        }
    }

    return (
        <div className="window_container">

            <Cross window_cut={handle_AddcourseVisible} />

            <div className="add_course">

                <FormDesc text="Adding a Course" />


                <div className="add_course_form">
                    <div className="form_group fg1">
                        <div className="input">
                            <label className="add_label" htmlFor="class">Class *</label>
                            <input type="text" id="class" placeholder="Chemistry" className="add_course_form_inn" value={Class}
                                onChange={(e) => setClass(e.target.value)} />
                            {(error && !Class) && <p className="add_course_form_error">Class cannot be empty</p>}
                        </div>
                        <div className="input">
                            <label className="add_label" htmlFor="Location">Location </label>
                            <input type="text" id="Location" placeholder="Classroom" className="add_course_form_inn" value={location}
                                onChange={(e) => setLocation(e.target.value)} />
                        </div>
                    </div>
                    <div className="form_group fg2">
                        <div className="input">
                            <label className="add_label" htmlFor="Location">Section* </label>
                            <input 
                                type="text" 
                                placeholder="Section" 
                                className="add_course_form_inn" 
                                value={section}
                                onChange={(e) => setSection(e.target.value)} />
                            {(error && !section) && <p className="add_course_form_error">Section cannot be empty</p>}
                        </div>
                        <div className="input">
                            <label className="add_label" htmlFor="Location">Block* </label>
                            <input 
                                type="text" 
                                placeholder="Block" 
                                className="add_course_form_inn" 
                                value={block}
                                onChange={(e) => setBlock(e.target.value)} />
                            {(error && !block) && <p className="add_course_form_error">Block cannot be empty</p>}
                        </div>
                    </div>

                    <div className="add_course_button">
                        <button onClick={handleClick}>Add course</button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default AddCourse;
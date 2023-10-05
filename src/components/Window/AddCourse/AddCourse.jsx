import "./assets/AddCourse.css"
import Cross from "../../Cross/Cross.jsx"
import FormDesc from "../../FormDesc/FormDesc";

const AddCourse = ({handle_AddcourseVisible}) => {
    return (
        <div className="add_course_container">
            
            <Cross window_cut={handle_AddcourseVisible}/>

            <div className="add_course">

                <FormDesc text1={"Adding a"} text2={"new course"}/>
                

                <div className="add_course_form">
                    <div className="form_group fg1">
                        <div className="input">
                            <label className="label" htmlFor="class">Class</label>
                            <input type="text" id="class" placeholder="Chemistry" />
                        </div>
                        <div className="input">
                            <label className="label" htmlFor="Location">Location *</label>
                            <input type="text" id="Location" placeholder="Location" />
                        </div>
                    </div>
                    <div className="form_group fg2">
                        <div className="input">
                            <label className="label" htmlFor="email">Student email</label>
                            <input type="text" id="email" placeholder="Student emails" />
                        </div>
                    </div>

                    <div className="add_course_button">
                        <button>Add course</button>
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default AddCourse;
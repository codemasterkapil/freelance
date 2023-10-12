import "./assets/AddCourse.css"
import Cross from "../../Cross/Cross.jsx"
import FormDesc from "../../FormDesc/FormDesc";
import { useState } from 'react'
import validator from 'validator';

const AddCourse = ({ handle_AddcourseVisible }) => {

    const [Class, setClass] = useState('');
    const [location, setLocation] = useState('');
    const [emails, setEmails] = useState('');
    const [error, setError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const validateEmail = (email_id) => {
        console.log(email_id)
        if (validator.isEmail(email_id)) {
            console.log('hello');
            
        }else{
            setEmailError(true);
        }
    }

    const handleClick = () => {
        if (Class === '' || emails === '') {
            setError(true);
            return;
        } else {
            //some api call
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
                            {(error && (Class === '')) && <p className="add_course_form_error">Class cannot be empty</p>}
                        </div>
                        <div className="input">
                            <label className="add_label" htmlFor="Location">Location </label>
                            <input type="text" id="Location" placeholder="Classroom" className="add_course_form_inn" value={location}
                                onChange={(e) => setLocation(e.target.value)} />
                        </div>
                    </div>
                    <div className="form_group fg2">
                        <div className="input">
                            <p className="add_label">Student emails *</p>
                            <textarea className="add_course_form_textarea"
                                value={emails}
                                onChange={(e) => setEmails(e.target.value)}
                                style={{ resize: 'none' }}
                            />
                            {(emailError && emails!=='') && <p className="add_course_form_error">Please enter valid emails</p>}
                            {(error && emails==='') && <p className="add_course_form_error">Student emails cannot be empty</p>}
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
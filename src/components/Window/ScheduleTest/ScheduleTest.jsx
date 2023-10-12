import "./assets/ScheduleTest.css"
import FormDesc from "../../FormDesc/FormDesc";
import Cross from "../../Cross/Cross";
import {useState} from 'react';


const ScheduleTest = ({ScheduleTestVisible,handle_ScheduleTestVisible}) => {

    const [Class,setClass]=useState('');
    const [date,setDate]=useState('');
    const [error,setError]=useState(false);  

    const handleClick=()=>{
       if(date==='' || Class==''){
        setError(true);
       }
    }

    return (
        <div  className='schedule_test_container'>

            <Cross window_cut={handle_ScheduleTestVisible}/>

            <div className="schedule_test">
                <FormDesc text="Adding Test date"/>


                <div className="add_course_form">
                        <div className="form_group fg1">
                            <div className="input">
                                <label className="add_label" htmlFor="class">Class *</label>
                                <input type="text" id="class" placeholder="Chemistry" value={Class} onChange={(e)=>setClass(e.target.value)} />
                                {(error && (Class === '')) && <p className="add_course_form_error">Class cannot be empty</p>}
                            </div>
                            <div className="input">
                                <label className="add_label" htmlFor="Location">Location</label>
                                <input type="text" id="Location" placeholder="Location" />
                            </div>
                        </div>
                        <div className="form_group fg2">
                        <div className="input">
                                <label className="add_label" htmlFor="date">Date *</label>
                                <input type="date" id="date" placeholder="" value={date} onChange={(e)=>setDate(e.target.value)} />
                                {(error && (date === '')) && <p className="add_course_form_error">Date cannot be empty</p>}
                        </div>
                        <div className="input">
                                <label className="add_label" htmlFor="Desc">Description</label>
                                <input type="text" id="Desc" placeholder="Description..." />
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
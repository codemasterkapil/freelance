import "./assets/ScheduleTest.css"
import FormDesc from "../../FormDesc/FormDesc";
import Cross from "../../Cross/Cross";


const ScheduleTest = ({handle_ScheduleTestVisible}) => {
    return (
        <div className="schedule_test_container">

            <Cross window_cut={handle_ScheduleTestVisible}/>

            <div className="schedule_test">
                <FormDesc text1={"Add"} text2={"test date"}/>


                <div className="add_course_form">
                        <div className="form_group fg1">
                            <div className="input">
                                <label className="label" htmlFor="class">Class *</label>
                                <input type="text" id="class" placeholder="Chemistry" />
                            </div>
                            <div className="input">
                                <label className="label" htmlFor="Location">Location</label>
                                <input type="text" id="Location" placeholder="Location" />
                            </div>
                        </div>
                        <div className="form_group fg2">
                        <div className="input">
                                <label className="label" htmlFor="date">Description</label>
                                <input type="date" id="date" placeholder="" />
                            </div>
                            <div className="input">
                                <label className="label" htmlFor="Desc">Description</label>
                                <input type="text" id="Desc" placeholder="Description..." />
                            </div>
                        </div>

                        <div className="add_course_button">
                            <button>Schedule test</button>
                        </div>
                    </div>
            </div>

        </div>
    );
}


export default ScheduleTest;
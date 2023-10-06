import Teacher_header from "./Teacher_header";
import Footer from "../StudentPage/Footer";
import Teacher_dashboard from "./Teacher_dashboard";
import AddCourse from "../../components/Window/AddCourse/AddCourse";
import ScheduleTest from "../../components/Window/ScheduleTest/ScheduleTest";
import { useState } from "react";

const Teacher = () => {

    const [AddcourseVisible, setAddcourseVisible] = useState(false);
    const handle_AddcourseVisible = (val) => {
        setAddcourseVisible(val)
    }

    const [ScheduleTestVisible, setScheduleTestVisible] = useState(false);
    const handle_ScheduleTestVisible = (val) => {
        setScheduleTestVisible(val)
    }

    return(
        <div className="teacher">
            <Teacher_header />
            <Teacher_dashboard handle_ScheduleTestVisible={handle_ScheduleTestVisible} handle_AddcourseVisible={handle_AddcourseVisible}/>
            {AddcourseVisible && <AddCourse handle_AddcourseVisible={handle_AddcourseVisible}/>}
            {ScheduleTestVisible && <ScheduleTest handle_ScheduleTestVisible={handle_ScheduleTestVisible}/>}
            <Footer />
        </div>
    );
}

export default Teacher;
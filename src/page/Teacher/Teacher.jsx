import "../../components/Teacher_dasboard/assets/Teacher.css"
import Teacher_header from "./Teacher_header";
import Footer from "../StudentPage/Footer";
import Teacher_dashboard from "./Teacher_dashboard";
import AddCourse from "../../components/Window/AddCourse/AddCourse";
import ScheduleTest from "../../components/Window/ScheduleTest/ScheduleTest";
import { useState,useEffect } from "react";
import axios from 'axios'

const Teacher = () => {

     const [data, setData] = useState(null)

     useEffect(() => {
        axios.get("https://portal-9bua.onrender.com/Dashboard")
        .then(Response => {
            setData(Response.data)
        })
        .catch(err => console.log(err))
      }, []);
      

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
            <Teacher_dashboard handle_ScheduleTestVisible={handle_ScheduleTestVisible} handle_AddcourseVisible={handle_AddcourseVisible} teacher_data={data}/>
            {AddcourseVisible && <AddCourse handle_AddcourseVisible={handle_AddcourseVisible}/>}
            {ScheduleTestVisible && <ScheduleTest ScheduleTestVisible={ScheduleTestVisible} handle_ScheduleTestVisible={handle_ScheduleTestVisible}/>}
            <Footer />
        </div>
    );
}

export default Teacher;
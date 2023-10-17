import "../../components/Teacher_dasboard/assets/Teacher.css"
import Teacher_header from "./Teacher_header";
import Footer from "../StudentPage/Footer";
import Teacher_dashboard from "./Teacher_dashboard";
import AddCourse from "../../components/Window/AddCourse/AddCourse";
import ScheduleTest from "../../components/Window/ScheduleTest/ScheduleTest";
import { useState,useEffect, useContext } from "react";
import axios from 'axios'
import Loader from "../../components/Loader/Loader.jsx";
import PdfUpload from "../../components/PdfUpload/PdfUpload";
import ReviewPdf from '../../components/Window/ReviewPdf/ReviewPdf.jsx';
import { AccountContext } from "../../Context/AccountProvider";
import Popup from "../../components/Popup/Popup";
import { useNavigate } from "react-router-dom";

const Teacher = () => {

     const {setTeacherCourses} = useContext(AccountContext);
     const {loading, setLoading} = useContext(AccountContext);
     const {loadingMessage, setLoadingMessage} = useContext(AccountContext);
     const {popUp} = useContext(AccountContext)
     const {teacher, setTeacher} = useContext(AccountContext);

     const navigate = useNavigate();

     useEffect(() => {
        if(window.sessionStorage.getItem("ALBy_teacher_token") === null){
            navigate("/login");
        }
        else{
            setTeacher(JSON.parse(window.sessionStorage.getItem("ALBy_teacher_token")));
            setLoading(true);
            setLoadingMessage("please wait");
            axios.get("http://54.232.139.4:5000/api/teacher/dashboard",{
                headers: {
                    "Authorization": `Bearer ${JSON.parse(window.sessionStorage.getItem("ALBy_teacher_token")).token}`,
                    'Content-Type': 'application/json', 
                }
            })
            .then(Response => {
                setTeacherCourses(Response.data.responseObject.courses);
                setLoading(false);
            })
            .catch(err => console.log(err))
        }
      }, []);
      

    const [AddcourseVisible, setAddcourseVisible] = useState(false);
    const handle_AddcourseVisible = (val) => {
        setAddcourseVisible(val)
    }

    const [ScheduleTestVisible, setScheduleTestVisible] = useState(false);
    const handle_ScheduleTestVisible = (val) => {
        setScheduleTestVisible(val)
    }

    const [ReviewPdfVisible, setReviewPdfVisible] = useState(false);
    const handle_ReviewPdfVisible = (val) => {
        setReviewPdfVisible(val)
    }

    const [PdfUploadVisible, setPdfUploadVisible] = useState(false);
    const handle_PdfUploadVisible = (val) => {
        setPdfUploadVisible(val)
    }

    return(
        <div className="teacher">
            {popUp && <Popup />}
            {loading && <Loader text={loadingMessage}/>}
            <Teacher_header />
            <Teacher_dashboard handle_ScheduleTestVisible={handle_ScheduleTestVisible} handle_AddcourseVisible={handle_AddcourseVisible} handle_ReviewPdfVisible={handle_ReviewPdfVisible} handle_PdfUploadVisible={handle_PdfUploadVisible}/>
            {AddcourseVisible && <AddCourse handle_AddcourseVisible={handle_AddcourseVisible}/>}
            {ScheduleTestVisible && <ScheduleTest ScheduleTestVisible={ScheduleTestVisible} handle_ScheduleTestVisible={handle_ScheduleTestVisible}/>}
            {ReviewPdfVisible && <ReviewPdf handle_ReviewPdfVisible={handle_ReviewPdfVisible}/>}
            {PdfUploadVisible && <PdfUpload handle_PdfUploadVisible={handle_PdfUploadVisible}/>}
            <Footer />
        </div>
    );
}

export default Teacher;
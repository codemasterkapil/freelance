import "../../components/Teacher_dasboard/assets/Teacher.css"
import Teacher_header from "./Teacher_header";
import Footer from "../StudentPage/Footer";
import Teacher_dashboard from "./Teacher_dashboard";
import AddCourse from "../../components/Window/AddCourse/AddCourse";
import ScheduleTest from "../../components/Window/ScheduleTest/ScheduleTest";
import { useState,useEffect } from "react";
import axios from 'axios'
import Loader from "../../components/Loader/Loder";
import PdfUpload from "../../components/PdfUpload/PdfUpload";
import ReviewPdf from '../../components/Window/ReviewPdf/ReviewPdf.jsx';

const Teacher = () => {

     const [data, setData] = useState(null)
     const [dataFetch, setDataFetch] = useState(false);

     useEffect(() => {
        axios.get("https://portal-9bua.onrender.com/Dashboard")
        .then(Response => {
            setData(Response.data)
            setDataFetch(true);
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
            {!dataFetch && <Loader text={"Please wait"}/>}
            <Teacher_header />
            <Teacher_dashboard handle_ScheduleTestVisible={handle_ScheduleTestVisible} handle_AddcourseVisible={handle_AddcourseVisible} teacher_data={data} handle_ReviewPdfVisible={handle_ReviewPdfVisible}/>
            {AddcourseVisible && <AddCourse handle_AddcourseVisible={handle_AddcourseVisible}/>}
            {ScheduleTestVisible && <ScheduleTest ScheduleTestVisible={ScheduleTestVisible} handle_ScheduleTestVisible={handle_ScheduleTestVisible}/>}
            {ReviewPdfVisible && <ReviewPdf handle_ReviewPdfVisible={handle_ReviewPdfVisible}/>}
            {PdfUploadVisible && <PdfUpload handle_PdfUploadVisible={handle_PdfUploadVisible}/>}
            <Footer />
        </div>
    );
}

export default Teacher;
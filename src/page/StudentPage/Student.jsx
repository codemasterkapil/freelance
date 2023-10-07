import StudentDashboard from "./StudentDashboard";
import StudentHeader from "./StudentHeader";
import Footer from "./Footer";
import StudentGreet from "../../components/StudentHeader/StudentGreet";
import StudyHow from "../../components/Window/StudyHow/StudyHow.jsx"
import StudyWhat from "../../components/Window/StudyWhat/StudyWhat.jsx"
import Schedule from "../../components/Window/Schedule/Schedule";
import axios from "axios";
import '../../components/StudentDashboard/assets/Student.css';

import { useEffect, useState } from "react";

const Student = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://portal-9bua.onrender.com/Dashboard")
      .then(Response => {
          setData(Response.data)
      })
      .catch(err => console.log(err))
  }, []);


    const [StudyHowVisible, setStudyHowVisible] = useState(false);
    const handle_StudyHowVisible = (val) => {
      setStudyHowVisible(val)
    }
  
    const [StudyWhatVisible, setStudyWhatVisible] = useState(false);
    const handle_StudyWhatVisible = (val) => {
      setStudyWhatVisible(val)
    }

    const [ScheduleVisible, setScheduleVisible] = useState(false);
    const handle_ScheduleVisible = (val) => {
      setScheduleVisible(val)
    }


    return (
        <div className="student">
            <StudentHeader />
            <StudentGreet />
            <StudentDashboard handle_ScheduleVisible={handle_ScheduleVisible} handle_StudyWhatVisible={handle_StudyWhatVisible} student_data={data}/>
            {StudyWhatVisible && <StudyWhat handle_StudyHowVisible={handle_StudyHowVisible} handle_StudyWhatVisible={handle_StudyWhatVisible}/>}
            {ScheduleVisible && <Schedule handle_ScheduleVisible={handle_ScheduleVisible}/>}
            {StudyHowVisible && <StudyHow handle_StudyHowVisible={handle_StudyHowVisible}/>}
            <Footer />
        </div>
    );
}

export default Student;
import StudentDashboard from "./StudentDashboard";
import StudentHeader from "./StudentHeader";
import Footer from "./Footer";
import StudentGreet from "../../components/StudentHeader/StudentGreet";
import StudyHow from "../../components/Window/StudyHow/StudyHow.jsx"
import StudyWhat from "../../components/Window/StudyWhat/StudyWhat.jsx"
import Schedule from "../../components/Window/Schedule/Schedule";
import axios from "axios";
import '../../components/StudentDashboard/assets/Student.css';
import Loader from "../../components/Loader/Loader";
import { AccountContext } from "../../Context/AccountProvider";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup/Popup.jsx"

const Student = () => {

  const [data, setData] = useState(null);
  const { loading, setLoading } = useContext(AccountContext);
  const { loadingMessage, setLoadingMessage } = useContext(AccountContext);
  const { person, setPerson, setStudentCourses} = useContext(AccountContext);
  const { popUp } = useContext(AccountContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (window.sessionStorage.getItem("ALBy_student_token") === null) {
      navigate('/login');
    }
    else {
      setPerson(JSON.parse(window.sessionStorage.getItem("ALBy_sudent_token")));
      setLoading(true);
      setLoadingMessage("please wait");
      axios.get("http://54.232.139.4:5000/api/student/dashboard", {
        headers: {
          'Authorization': `Bearer ${JSON.parse(window.sessionStorage.getItem("ALBy_student_token")).token}`,
          'Content-Type': 'application/json',
        }
      })
        .then(Response => {
          setStudentCourses(Response.data.responseObject.courses);
          setData(Response.data)
          setLoading(false);
        })
        .catch(err => console.log(err))
    }
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
      {popUp && <Popup />}
      {loading && <Loader text={loadingMessage} />}
      <StudentHeader />
      <StudentDashboard handle_ScheduleVisible={handle_ScheduleVisible} handle_StudyWhatVisible={handle_StudyWhatVisible} student_data={data} />
      {StudyWhatVisible && <StudyWhat handle_StudyHowVisible={handle_StudyHowVisible} handle_StudyWhatVisible={handle_StudyWhatVisible} />}
      {ScheduleVisible && <Schedule handle_ScheduleVisible={handle_ScheduleVisible} />}
      {StudyHowVisible && <StudyHow handle_StudyHowVisible={handle_StudyHowVisible} />}
      <Footer />
    </div>
  );
}

export default Student;
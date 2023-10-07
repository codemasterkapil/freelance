import "./assets/Teacher_subject.css";
import {FiUsers} from 'react-icons/fi'

const Teacher_subject = ({course_data}) => {
    // console.log(course_data.course.instructor.title);
    return (
        <div className="teacher_subject">
            <div className="box1">
                <p className="font1">{course_data.course.course} {course_data.course.section}</p>
                <div className="innerbox">
                    <p className="font2">Block {course_data.course.period}</p>
                    <div className="user">
                        <FiUsers className="font2"/>
                        <p className="font2">{course_data.course.strength}</p>
                    </div>
                </div>
            </div>
            <div className="box2">
                <p className="font2">Class interaction score</p>
                <p className="font1">{course_data.course.metrics.interactScore}</p>
            </div>
            <div className="box3">
                <p className="font2">Class Quiz average score</p>
                <p className="font1">{course_data.course.metrics.quizAvg}</p>
            </div>
        </div>
    )
}

export default Teacher_subject;
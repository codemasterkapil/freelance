import "./assets/Teacher_subject.css";
import { FiUsers } from 'react-icons/fi'

const Teacher_subject = ({ course_data, handle_ReviewPdfVisible }) => {
    // console.log(course_data.course.instructor.title);
    return (
        <div className="teacher_subject">

            <div className="tbox1">
                <div className="box11">
                    <div className="circle"></div>
                    <div>
                        <p className="font1">{course_data.course.course} {course_data.course.section}</p>
                        <div className="innerbox">
                            <p className="font2">Block {course_data.course.period}</p>
                            <div className="user">
                                <FiUsers className="font2" />
                                <p className="font2">{course_data.course.strength}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box12">
                    <div>
                        <p className="font2">Class interaction score</p>
                        <p className="font1 score">{course_data.course.metrics.interactScore}</p>
                    </div>
                    <div>
                        <p className="font2">Class Quiz average score</p>
                        <p className="font1 score">{course_data.course.metrics.quizAvg}%</p>
                    </div>
                </div>
            </div>

            <div className="tbox2">
                <div className="box_side">
                    <p className="font2">Unit covered: 3</p>
                    <p className="font2">Unit to cover: 5</p>
                    <p className="font2">Current unit: Acid and Base</p>
                </div>
                <div className="material_button">
                    <button
                        onClick={() => handle_ReviewPdfVisible(true)}
                    >Upload class material</button>
                </div>
            </div>
        </div>
    )
}

export default Teacher_subject;
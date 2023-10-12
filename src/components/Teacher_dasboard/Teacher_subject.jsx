import "./assets/Teacher_subject.css";
import { FiUsers } from 'react-icons/fi'
import {data,getCode} from '../../assets/ColorsData.js';

const Teacher_subject = ({ course_data, handle_PdfUploadVisible }) => {
   
    let indCode=getCode(course_data.course.course);

    return (
        <div className="teacher_subject" style={{backgroundColor:data[indCode].background}}>

            <div className="tbox1" >
                <div className="box11" >
                    <div className="circle" style={{backgroundColor:data[indCode].circle}}></div>
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
                        <p className="font2" style={{color:data[indCode].smalltext}}>Class interaction score</p>
                        <p className="font1 score">{course_data.course.metrics.interactScore}</p>
                    </div>
                    <div>
                        <p className="font2" style={{color:data[indCode].smalltext}}>Class Quiz average score</p>
                        <p className="font1 score">{course_data.course.metrics.quizAvg}%</p>
                    </div>
                </div>
            </div>

            <div className="tbox2">
                <div className="box_side">
                    <p className="font2" style={{color:data[indCode].smalltext}}>Unit covered: 3</p>
                    <p className="font2" style={{color:data[indCode].smalltext}}>Unit to cover: 5</p>
                    <p className="font2" style={{color:data[indCode].smalltext}}>Current unit: Acid and Base</p>
                </div>
                <div className="material_button">
                    <button style={{backgroundColor:data[indCode].circle}}
                        onClick={() => handle_PdfUploadVisible(true)}
                    >Upload class material</button>
                </div>
            </div>
        </div>
    )
}

export default Teacher_subject;
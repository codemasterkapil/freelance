import "./assets/Subject.css";
import {data,getCode} from '../../assets/ColorsData.js';

const Subject = ({course_data}) => {
    
    let indCode=getCode(course_data.course.course);

    return (
        <div 
            className="subject" style={{backgroundColor:data[indCode].background, borderColor: data[indCode].smalltext}}
            onMouseEnter={(e) => e.currentTarget.style.filter="brightness(110%)"}
            onMouseLeave={(e) => e.currentTarget.style.filter="brightness(100%)"}
        >
            <div className="circle" style={{backgroundColor:data[indCode].circle}}></div>
            <div className="box1">
                <p className="font1 centre">{course_data.course.course} {course_data.course.section}</p>
                <p className="font2" style={{color:data[indCode].smalltext}}>{course_data.course.instructor.title} {course_data.course.instructor.lastName}, Block {course_data.course.period}</p>
            </div>
            <div className="box2">
                <p className="font2" style={{color:data[indCode].smalltext}}>interaction score</p>
                <p className="font1 score">{course_data.course.metrics.interactScore}</p>
            </div>
            <div className="box3">
                <p className="font2" style={{color:data[indCode].smalltext}}>Quiz average score</p>
                <p className="font1 score">{course_data.course.metrics.quizAvg}%</p>
            </div>
        </div>
    )
}

export default Subject;
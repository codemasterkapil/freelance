import "./assets/Subject.css";

const Subject = ({course_data}) => {
    console.log(course_data);
    return (
        <div className="subject">
            <div className="box1">
                <p className="font1">{course_data.course.course} {course_data.course.section}</p>
                <p className="font2">{course_data.course.instructor.title} {course_data.course.instructor.lastName}, Block {course_data.course.period}</p>
            </div>
            <div className="box2">
                <p className="font2">interaction score</p>
                <p className="font1">{course_data.course.metrics.interactScore}</p>
            </div>
            <div className="box3">
                <p className="font2">Quiz average score</p>
                <p className="font1">{course_data.course.metrics.quizAvg}</p>
            </div>
        </div>
    )
}

export default Subject;
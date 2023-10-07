import "./assets/Subject.css";

const Subject = ({course_data}) => {
    console.log(course_data);
    return (
        <div className="subject">
            <div className="intro">
                <p className="subject_name">{course_data.course.course} {course_data.course.section}</p>
                <p className="teacher_name">{course_data.course.instructor.title} {course_data.course.instructor.lastName}, Block {course_data.course.period}</p>
            </div>
            <div className="detail"> 
                <div className="interaction">
                    <p className="type">Interaction score</p>
                    <p className="score">{course_data.course.metrics.interactScore}%</p>
                </div>
                <div className="quiz_score">
                    <p className="type">Quiz score avergae</p>
                    <p className="score">{course_data.course.metrics.quizAvg}%</p>
                </div>
            </div>
        </div>
    )
}

export default Subject;
import "./subject.css";

const Subject = (props) => {
    return (
        <div className="subject">
            <div className="intro">
                <p className="subject_name">chemistry HL</p>
                <p className="teacher_name">Mr. Fox, Block 1</p>
            </div>
            <div className="detail">
                <div className="interaction">
                    <p className="type">Interaction score</p>
                    <p className="score">0.7</p>
                </div>
                <div className="quiz">
                    <p className="type">Quiz score avergae</p>
                    <p className="score">85%</p>
                </div>
            </div>
        </div>
    )
}

export default Subject;
import "./studyHow.css";
import { useEffect, useRef, useState } from "react";

const StudyHow = () => {

    const [width, setWidth] = useState(0);
    const component_ref = useRef(null);
    const head_ref = useRef(null);

    useEffect(() => {
        // console.log(component_ref.current.offsetWidth);
        const left = (component_ref.current.offsetWidth - head_ref.current.offsetWidth)/2;
        head_ref.current.style.left = left + "px";
    });


    return (
        <div className="studyhow_container" ref = {component_ref}>
            <p className="heading" ref = {head_ref}>How do you want to study?</p>
            <div className="studyhow">
                <div className="quiz_container">
                    <div className="quiz">
                        <p className="studyhow_type">Do a multiple choice question</p>
                        <p className="desc">Fun fact : Doing a multiple choice question leverages a powerful learning technique known as retrievel practice</p>
                        <button>Quiz me!</button>
                    </div>
                </div>
                <div className="notes_container">
                    <div className="notes">
                        <p className="studyhow_type">Review lesson summary</p>
                        <p className="desc">Fun fact : Reviewing condensed class notes after the class boots memory retention and long term understanding</p>
                        <button>Lesson summary</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudyHow;
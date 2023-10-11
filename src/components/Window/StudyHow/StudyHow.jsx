import "./assets/StudyHow.css";
import Cross from "../../Cross/Cross";
import { useEffect, useRef} from "react";
import { Link } from 'react-router-dom';

const StudyHow = ({handle_StudyHowVisible}) => {

    return (
        <div className="window_container">
            <Cross window_cut={handle_StudyHowVisible}/>
            <div className="studyhow_container_outer">
                <p className="studyhow_heading">How do you want to study?</p>
                <div className="studyhow_container">
                    <div className="studyhow">
                        <div className="quiz_container">
                            <div className="quiz">
                                <p className="studyhow_type">Do a multiple choice question</p>
                                <img className="studyhow_img" src={require("../../../assets/rocket.png")} alt="" />
                                <p className="desc">Fun fact : Doing a multiple choice question leverages a powerful learning technique known as retrievel practice</p>
                                <Link to="/quiz" style={{textDecoration:"none", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <button className="studyHow_button">Quiz me!</button>  
                            </Link>
                            </div>
                        </div>
                        <div className="notes_container">
                            <div className="notes">
                                <p className="studyhow_type">Review lesson summary</p>
                                <img className="studyhow_img" src={require("../../../assets/drugs.png")} alt="" />
                                <p className="desc">Fun fact : Reviewing condensed class notes after the class boots memory retention and long term understanding</p>
                                <Link to="/quiz" style={{textDecoration:"none", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <button>Lesson summary</button>  
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudyHow;
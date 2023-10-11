import "./assets/Teacher_greet.css"

const Teacher_greet = () => {
    return(
        <div className="teacher_greet">
            <div className="teacher_greet_left">
                <p className="p1">Hello {"(Teacher)"}</p>
                <p className="p2">Welcome to ALBy</p>
            </div>
            <img src={require("./assets/wolf.jpeg")} alt="" />
        </div>
    );
}

export default Teacher_greet;
import "./assets/Filter.css"
import { useState } from "react";

const Filter = ({handle_ScheduleVisible}) => {

    const [check, setCheck] = useState(false);
    const [birthday, setBirthday] = useState(false);
    const [school, setschool] = useState(false);
    const [tasks, setTasks] = useState(false);


    return (
        <div className="filter">
            <input className="search" type="text" placeholder="search" />
            <p>My courses</p>

            <div className="filter_type">
                <div className="checkbox">
                    <input
                        type="checkbox"
                        checked={check}
                        onChange={() => setCheck(!check)}
                    />
                    <p>Check</p>
                </div>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        checked={birthday}
                        onChange={() => setBirthday(!birthday)}
                    />
                    <p>Birthday</p>
                </div>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        checked={school}
                        onChange={() => setschool(!school)}
                    />
                    <p>School</p>
                </div>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        checked={tasks}
                        onChange={() => setTasks(!tasks)}
                    />
                    <p>Tasks</p>
                </div>
            </div>

            <button onClick={() => {
                handle_ScheduleVisible(true);
            }}>
                Schedule block {">"}
            </button>
        </div>
    );
}


export default Filter;
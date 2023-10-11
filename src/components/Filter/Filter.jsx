import "./assets/Filter.css"
import { useState } from "react";

const Filter = ({handle_popup, type}) => {

    const [check, setCheck] = useState(false);
    const [birthday, setBirthday] = useState(false);
    const [school, setschool] = useState(false);
    const [tasks, setTasks] = useState(false);


    return (
        <div className="filter">
            <input className="search" type="text" placeholder="search" />

            <div className="filter_type">
                <div className="checkbox">
                    <input
                        type="checkbox"
                        checked={check}
                        onChange={() => setCheck(!check)}
                    />
                    <p>Lys</p>
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

            {type === 'teacher' ? <button className="add_test" onClick={() => handle_popup(true)}>Add test</button> : <button className="schedule_block" onClick={() => {
                handle_popup(true);
            }}>
                Schedule block
            </button>}
        </div>
    );
}


export default Filter;
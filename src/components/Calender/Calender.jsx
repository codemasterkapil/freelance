import { useEffect, useRef, useState } from "react";
import "./assets/Calender.css";

const Calender = () => {

  const [mousePos, setMousePos] = useState({x:0, y:0});
  const [todayEvent, setTodayEvent] = useState([]);
  const [todayEventVis, setTodayEventVis] = useState(false);
  const eventref = useRef(null);


  const [check, setCheck] = useState(false);
  const [birthday, setBirthday] = useState(false);
  const [school, setschool] = useState(false);
  const [tasks, setTasks] = useState(false);


  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMousePos({x: event.clientX, y: event.clientY});
    })
  }, [])

  let date_today = new Date();
  let firstDay = new Date(date_today.getFullYear(), date_today.getMonth(), 1);    
  const blank_days = Array.from({ length: firstDay.getDay() }, (_, index) => index + 1);
  const main_days = Array.from({ length: new Date(date_today.getFullYear(), date_today.getMonth(), 0).getDate()}, (_, index) => index + 1);


  const event_array = [["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["Hey man i am here", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], [], [], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"]] 


  const color = ["#fa675c", "#edfa5c", "#4fe84f", "#4fe8de", "#db4dc4"]

  const day = (date) => {
    return (
      <div 
        className="day"
        onMouseOver={() => {
            setTodayEvent(event_array[date-1]);
            setTodayEventVis(true);
            // console.log(events[0]);

            // console.log(events);

            if(eventref.current !== null){
              eventref.current.style.left = mousePos.x + 20 + "px";
              eventref.current.style.top = mousePos.y + 20 + "px";
            }
        }}
        onMouseOut={() => {
          setTodayEventVis(false);
        }}
      >
        <p className="date">{date}</p>

        <p 
          className="event_count"
          style={{"background-color" : (event_array[date-1].length > 0) ? "#047d0a": "white", "color" : (event_array[date-1].length > 0) ? "white" : "black"}}
        >
          Schdule event : {event_array[date-1].length}
        </p>

      </div>
    );
  }


  return (
    <div className="calendar_container">
      <div className="calendar">
        <div className="day day_name">Sun</div>
        <div className="day day_name">Mon</div>
        <div className="day day_name">Tue</div>
        <div className="day day_name">Wed</div>
        <div className="day day_name">Thu</div>
        <div className="day day_name">Fri</div>
        <div className="day day_name">Sat</div>

        {
          blank_days.map((number) => {
            return <div></div>
          })
        }

        {
          main_days.map((number) => {
            return day(number, event_array[number-1]);
          })
        }

      </div>
      
      <div className="event_container" ref={eventref}>
        {todayEventVis && 
          <div className="events">
            {todayEvent && 
              <ul>
                {todayEvent.map((curr_event) => {
                  return <li>{curr_event}</li>
                })}
              </ul>
            }
          </div>
        }
      </div>

    </div>
  );
}

export default Calender;

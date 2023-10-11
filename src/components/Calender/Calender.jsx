import { useEffect, useRef, useState } from "react";
import Filter from "../Filter/Filter";
import "./assets/Calender.css";

const Calender = ({handle_popup, type}) => {

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
  const blank_days1 = Array.from({ length: firstDay.getDay() }, (_, index) => index + 1);
  const main_days = Array.from({ length: new Date(date_today.getFullYear(), date_today.getMonth(), 0).getDate()}, (_, index) => index + 1);
  const blank_days2 = Array.from({ length: (35 - main_days.length - blank_days1.length) }, (_, index) => index + 1);

  console.log(blank_days2)


  const event_array = [["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["Hey man i am here", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], [], [], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"], ["complete freelence work today at any cost", "study computer networks", "start BTP work"]] 

  const day = (date) => {
    return (
      <div 
        className="day"
        onMouseOver={() => {
            setTodayEvent(event_array[date-1]);
            setTodayEventVis(true);

            if(eventref.current !== null){
              eventref.current.style.left = mousePos.x -6 + "px";
              eventref.current.style.top = mousePos.y -130 + "px";
            }
        }}
        onMouseOut={() => {
          setTodayEventVis(false);
        }}
      >
        <p className="date">{date}</p>
        <div className="show_events">
          <ul className="event_list">
            {event_array[date-1].map((curr_event) => {
              return <li>{curr_event}</li>
            })}
          </ul>
        </div>

        
      </div>
    );
  }


  return (
    <div className="calendar_container">
      <Filter handle_popup={handle_popup} type={type} />
      <div className="calendar">
        <div className="day day_name">Sun</div>
        <div className="day day_name">Mon</div>
        <div className="day day_name">Tue</div>
        <div className="day day_name">Wed</div>
        <div className="day day_name">Thu</div>
        <div className="day day_name">Fri</div>
        <div className="day day_name">Sat</div>

        {
          blank_days1.map(() => {
            return <div className="day"></div>
          })
        }

        {
          main_days.map((number) => {
            return day(number, event_array[number-1]);
          })
        }

        {
          blank_days2.map(() => {
            return <div className="day"></div>
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
        
      <img className="puka" src={require("../../assets/pucka.png")} alt="" />
    </div>
  );
}

export default Calender;

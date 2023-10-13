import { useEffect, useRef, useState } from "react";
import Filter from "../Filter/Filter";
import "./assets/Calender.css";
import events_rare from "../../assets/getEvents.js"
import {data, getCode} from "../../assets/ColorsData.js"

const Calender = ({handle_popup, type}) => {

  const [mousePos, setMousePos] = useState({x:0, y:0});
  const [todayEvent, setTodayEvent] = useState([]);
  const [todayEventVis, setTodayEventVis] = useState(false);
  const eventref = useRef(null);

  const [check, setCheck] = useState(false);
  const [birthday, setBirthday] = useState(false);
  const [school, setschool] = useState(false);
  const [tasks, setTasks] = useState(false);

  let dateToday = new Date();
  let firstDay = new Date(dateToday.getFullYear(), dateToday.getMonth(), 1);    
  const beforeExtra = Array.from({ length: firstDay.getDay() }, (_, index) => index + 1);
  const mainDays = Array.from({ length: new Date(dateToday.getFullYear(), dateToday.getMonth(), 0).getDate()}, (_, index) => index + 1);
  const afterExtra = Array.from({ length: (35 - mainDays.length - beforeExtra.length) }, (_, index) => index + 1);


const [event_array, set_event_array] = useState(Array.from({ length: mainDays.length}, () => new Array()));

  

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMousePos({x: event.clientX, y: event.clientY});
    })

    events_rare.responseObject.events.map((event) => {
      const d = new Date(event.date);
      const today_date = d.getDate();
      const today_month = d.getMonth();
      const today_year = d.getFullYear();
      console.log(event.date, today_date, today_month, today_year, dateToday.getMonth(), dateToday.getFullYear());
      
      if(today_month === dateToday.getMonth() && today_year === dateToday.getFullYear()){
        console.log(typeof(today_date))
        let copy = event_array;
        console.log(copy);
        copy[today_date-1].push(event);
        console.log(copy[today_date-1]);
        set_event_array(copy);
      }
    }) 

    
    console.log(event_array)
  }, [])

  // console.log(blank_days2)

  const day = (date) => {
    return (
      <div 
        className="day"
        onMouseOver={() => {
            setTodayEvent(event_array[date-1]);
            setTodayEventVis(true);

            if(eventref.current !== null){
              eventref.current.style.left = mousePos.x - 6 + "px";
              eventref.current.style.top = mousePos.y - 130 + "px";
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
              return <li>{curr_event.title}</li>
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
          beforeExtra.map(() => {
            return <div className="day"></div>
          })
        }

        {
          mainDays.map((number) => {
            return day(number, event_array[number-1]);
          })
        }

        {
          afterExtra.map(() => {
            return <div className="day"></div>
          })
        }

      </div>
      
      <div 
        className="event_container" 
        ref={eventref}
        onMouseEnter={() => setTodayEventVis(true)}
        onMouseLeave={() => setTodayEventVis(false)}
      >
        {todayEventVis && 
          <div className="events">
            {todayEvent && 
              <ul>
                {todayEvent.map((curr_event) => {
                  return <li>
                    <p
                      style={{color: curr_event.taskType === "Test" ? "red" : data[curr_event.category-1].smalltext}}
                    >{curr_event.title}</p>
                    <p style={{fontSize: "0.7rem", paddingLeft: "10px", paddingBottom: "10px"}}>{curr_event.description}</p>
                  </li>
                })}
              </ul>
            }
          </div>
        }
      </div>
        
      <img className="puka" src={require("../../assets/pucka.png")} alt="" 
      />
    </div>
  );
}

export default Calender;

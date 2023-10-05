import { useEffect, useRef, useState } from "react";
import "./assets/Calender.css";

const Calender = () => {

  const [mousePos, setMousePos] = useState({x:0, y:0});
  const [todayEvent, setTodayEvent] = useState([]);
  const [todayEventVis, setTodayEventVis] = useState(false);
  const eventref = useRef(null);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMousePos({x: event.clientX, y: event.clientY});
    })
  }, [])

  let date_today = new Date();
  let firstDay = new Date(date_today.getFullYear(), date_today.getMonth(), 1);    
  const blank_days = Array.from({ length: firstDay.getDay() }, (_, index) => index + 1);
  const main_days = Array.from({ length: new Date(date_today.getFullYear(), date_today.getMonth(), 0).getDate()}, (_, index) => index + 1);

  const day = (date, events) => {
    return (
      <div 
        className="day"
        onMouseOver={() => {
            setTodayEvent(events);
            setTodayEventVis(true);

            if(eventref.current !== null){
              console.log(eventref);
              eventref.current.style.left = mousePos.x + "px";
              eventref.current.style.top = mousePos.y + "px";
            }
        }}
        onMouseOut={() => {
          setTodayEventVis(false);
          setTodayEventVis(false);
        }}
      >
        <p className="date">{date}</p>
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
            return day(number, ["i am tarun"]);
          })
        }

      </div>

      {todayEventVis && 
        <div className="events" ref={eventref}>
      
        </div>
      }

    </div>
  );
}

export default Calender;

import CalendarDay from "../CalendarDay/CalendarDay";
import './Calendar.css'

const Calendar = ({shiftsByDay}) => {

     const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
  return (
    <div className="calendar-grid">
      { days.map((day) => (
        <CalendarDay key={day} day={day} shifts={shiftsByDay[day] || []} />
       ))}

    </div>
  )
}

export default Calendar
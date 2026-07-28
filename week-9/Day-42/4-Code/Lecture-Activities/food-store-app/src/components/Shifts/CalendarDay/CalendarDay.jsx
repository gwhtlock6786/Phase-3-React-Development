import Shift from "../Shift/Shift";
import './CalendarDay.css'

const CalendarDay = ({day, shifts}) => {

    const count = shifts.length;

   
  return (
   <section className="calendar-day">
    <header className="calendar-day-header">
        <h3>{day}</h3>
        <span>{count === 0? "No Shifts" : `${count} ${count === 1? "shift" : "shifts"}`}</span>
    </header>

    <div className="calendar-day-body">
        {shifts.length === 0  ? (
            <p className="empty-day">
               No shifts scheduled
            </p>
        ) : (
            shifts.map((shift) =>(
                <Shift key={shift.id} shift={shift} />
            ))
        )}
    </div>
   </section>
  )
}

export default CalendarDay
import Calendar from "../Calendar/Calendar";
import { groupShiftsByDay } from "../../../utils/groupShiftsByDay"
import './ShiftDisplay.css';

const ShiftDisplay = ({ shifts }) => {


 //Calls function from utilities folder - this seperates task and focuses the component on one thing.
const shiftsByDay = groupShiftsByDay(shifts);

  return (
    <section className="shift-display">
      <h2>Weekly Schedule</h2>
        <Calendar shiftsByDay={shiftsByDay} />
    </section>
  );
};

export default ShiftDisplay;
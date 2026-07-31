import "./HoursCard.css";
import { calculateShiftHours } from "../../utils/shiftUtils";

const HoursCard = ({ shifts }) => {
  const totalHours = shifts.reduce((total, shift) => {
    return total + calculateShiftHours(shift);
  }, 0);

  return (
    <section className="hours-card">
      <h2>Total Scheduled Hours</h2>
      <p>{totalHours} </p>
      <p>Hours</p>
    </section>
  );
};

export default HoursCard;

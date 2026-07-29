import "./ShiftRow.css";

import { calculateShiftHours } from "../../utils/shiftUtils";

const ShiftRow = ({ shift }) => {
  return (
    <tr className="shift-row">
      <td>{shift.employee}</td>

      <td>{shift.date}</td>

      <td>{shift.startTime}</td>

      <td>{shift.endTime}</td>

      <td>{shift.role}</td>

      <td>{calculateShiftHours(shift)}</td>
    </tr>
  );
};

export default ShiftRow;

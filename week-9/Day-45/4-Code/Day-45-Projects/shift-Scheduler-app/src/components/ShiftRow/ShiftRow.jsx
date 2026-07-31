import "./ShiftRow.css";

import { calculateShiftHours } from "../../utils/shiftUtils";

const ShiftRow = ({ shift, setShifts }) => {
  function handleRoleChange(event) {
    const newRole = event.target.value;

    setShifts((previousShifts) =>
      previousShifts.map((currentShift) =>
        currentShift.id === shift.id
          ? {
              ...currentShift,
              role: newRole,
            }
          : currentShift,
      ),
    );
  }

  function handleDeleteShift() {
    const confirmed = window.confirm(`Delete ${shift.employee}'s shift?`);

    if (!confirmed) return;

    setShifts((previousShifts) =>
      previousShifts.filter((currentShift) => currentShift.id !== shift.id),
    );
  }

  return (
    <tr className="shift-row">
      <td>{shift.employee}</td>

      <td>{shift.date}</td>

      <td>{shift.startTime}</td>

      <td>{shift.endTime}</td>

      <td>
        <select value={shift.role} onChange={handleRoleChange}>
          <option value="Manager">Manager</option>

          <option value="Cook">Cook</option>

          <option value="Server">Server</option>

          <option value="Host">Host</option>
        </select>
      </td>

      <td>{calculateShiftHours(shift)}</td>

      <td>
        <button className="delete-btn" onClick={handleDeleteShift}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ShiftRow;

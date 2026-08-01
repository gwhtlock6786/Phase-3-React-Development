import "./ShiftTable.css";

import ShiftRow from "../ShiftRow/ShiftRow";

const ShiftTable = ({ shifts, onUpdateShift, onDeleteShift }) => {
  return (
    <section className="table-section">
      <table>
        <thead>
          <tr>
            <th>Employee</th>

            <th>Date</th>

            <th>Start Time</th>

            <th>End Time</th>

            <th>Role</th>

            <th>Hours</th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {shifts.map((shift) => (
            <ShiftRow
              key={shift.id}
              shift={shift}
              onUpdateShift={onUpdateShift}
              onDeleteShift={onDeleteShift}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ShiftTable;

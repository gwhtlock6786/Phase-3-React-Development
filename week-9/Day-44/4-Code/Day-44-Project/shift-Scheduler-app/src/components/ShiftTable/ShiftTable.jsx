import "./ShiftTable.css";

import ShiftRow from "../ShiftRow/ShiftRow";

const ShiftTable = ({ shifts }) => {
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
          </tr>
        </thead>

        <tbody>
          {shifts.map((shift, index) => (
            <ShiftRow key={index} shift={shift} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ShiftTable;

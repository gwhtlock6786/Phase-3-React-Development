import "./ShiftRow.css";

import { useState } from "react";
import { calculateShiftHours } from "../../utils/shiftUtils";

const ShiftRow = ({ shift, onUpdateShift, onDeleteShift }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [editedShift, setEditedShift] = useState({
    employee: shift.employee,
    date: shift.date,
    startTime: shift.startTime,
    endTime: shift.endTime,
    role: shift.role,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setEditedShift((previousShift) => ({
      ...previousShift,
      [name]: value,
    }));
  }

  function handleSave() {
    const updatedShift = {
      ...shift,
      ...editedShift,
    };

    onUpdateShift(updatedShift);

    setEditedShift({
      employee: updatedShift.employee,
      date: updatedShift.date,
      startTime: updatedShift.startTime,
      endTime: updatedShift.endTime,
      role: updatedShift.role,
    });

    setIsEditing(false);
  }
  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this shift?",
    );

    if (!confirmed) return;

    onDeleteShift(shift.id);
  }

  function handleCancel() {
    setEditedShift({
      employee: shift.employee,
      date: shift.date,
      startTime: shift.startTime,
      endTime: shift.endTime,
      role: shift.role,
    });

    setIsEditing(false);
  }

  return (
    <tr className="shift-row">
      {isEditing ? (
        <>
          <td>
            <input
              name="employee"
              value={editedShift.employee}
              onChange={handleChange}
            />
          </td>

          <td>
            <input
              type="date"
              name="date"
              value={editedShift.date}
              onChange={handleChange}
            />
          </td>

          <td>
            <input
              type="time"
              name="startTime"
              value={editedShift.startTime}
              onChange={handleChange}
            />
          </td>

          <td>
            <input
              type="time"
              name="endTime"
              value={editedShift.endTime}
              onChange={handleChange}
            />
          </td>

          <td>
            <input
              name="role"
              value={editedShift.role}
              onChange={handleChange}
            />
          </td>

          <td>
            {calculateShiftHours({
              ...shift,
              ...editedShift,
            })}
          </td>

          <td>
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>

            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{shift.employee}</td>

          <td>{shift.date}</td>

          <td>{shift.startTime}</td>

          <td>{shift.endTime}</td>

          <td>{shift.role}</td>

          <td>{calculateShiftHours(shift)}</td>

          <td>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>

            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default ShiftRow;

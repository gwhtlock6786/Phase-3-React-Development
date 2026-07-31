import { useState } from "react";
import "./AddShift.css";

const AddShiftForm = ({ setShifts }) => {
  const [formData, setFormData] = useState({
    employee: "",
    date: "",
    startTime: "",
    endTime: "",
    role: "Server",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newShift = {
      id: Date.now(),

      ...formData,
    };

    setShifts((previousShifts) => [...previousShifts, newShift]);

    setFormData({
      employee: "",
      date: "",
      startTime: "",
      endTime: "",
      role: "Server",
    });
  }

  return (
    <section id="add-shift" className="add-shift-form">
      <h2>Add New Shift</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Employee
          <input
            type="text"
            name="employee"
            value={formData.employee}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Start Time
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          End Time
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Role
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Manager">Manager</option>

            <option value="Cook">Cook</option>

            <option value="Server">Server</option>

            <option value="Host">Host</option>
          </select>
        </label>

        <button type="submit">Add Shift</button>
      </form>
    </section>
  );
};

export default AddShiftForm;

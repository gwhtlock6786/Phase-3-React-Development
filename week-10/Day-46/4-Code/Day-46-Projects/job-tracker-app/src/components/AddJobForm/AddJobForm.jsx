import { useState } from "react";
import "./AddJobForm.css";

const AddJobForm = ({ setJobs }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    salary: "",
    status: "Applied",
    statusDate: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newJob = {
      id: Date.now(),
      name: formData.name,
      company: formData.company,
      position: formData.position,
      salary: Number(formData.salary),
      status: formData.status,
      statusDate: formData.statusDate,
    };

    setJobs((previousJobs) => [...previousJobs, newJob]);

    setFormData({
      name: "",
      company: "",
      position: "",
      salary: "",
      status: "Applied",
      statusDate: "",
    });
  }

  return (
    <section className="form-container">
      <h2>Add Job Application</h2>

      <form id="add-job-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>

        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="company">Company:</label>

        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <label htmlFor="position">Position:</label>

        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        />

        <label htmlFor="salary">Salary:</label>

        <input
          type="number"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <label htmlFor="status">Status:</label>

        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Applied">Applied</option>

          <option value="Interviewing">Interviewing</option>

          <option value="Offer">Offer</option>
        </select>

        <label htmlFor="statusDate">Status Date:</label>

        <input
          type="date"
          id="statusDate"
          name="statusDate"
          value={formData.statusDate}
          onChange={handleChange}
          required
        />

        <button id="add-form-button" type="submit">
          Add Job Application
        </button>
      </form>
    </section>
  );
};

export default AddJobForm;

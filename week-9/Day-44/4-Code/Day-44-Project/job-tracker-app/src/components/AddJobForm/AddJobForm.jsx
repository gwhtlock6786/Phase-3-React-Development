import "./AddJobForm.css";

const AddJobForm = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert("You submitted the form! Hooray!");
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
          placeholder="Enter applicant name..."
          required
        />

        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Enter company name..."
          required
        />

        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          placeholder="Enter position..."
          required
        />

        <label htmlFor="salary">Salary:</label>
        <input
          type="number"
          id="salary"
          name="salary"
          placeholder="Enter salary..."
          min="0"
        />

        <label htmlFor="status">Status:</label>
        <select id="status" name="status" defaultValue="Applied">
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer">Offer</option>
        </select>

        <label htmlFor="statusDate">Status Date:</label>
        <input type="date" id="statusDate" name="statusDate" required />

        <button id="add-form-button" type="submit">
          Add Job Application
        </button>
      </form>
    </section>
  );
};

export default AddJobForm;

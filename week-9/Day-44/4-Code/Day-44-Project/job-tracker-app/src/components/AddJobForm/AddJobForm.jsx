const AddJobForm = () => {
  function handleSubmit() {
    alert("you submitted the Form Hoorayy");
  }

  return (
    <section className="form-container">
      <h2>Add Job From</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="Enter new employee name...."
          id="name"
          name="name"
        />
      </form>
    </section>
  );
};

export default AddJobForm;

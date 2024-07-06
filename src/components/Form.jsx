const Personal = () => {
  return (
    <>
      <div className="personal-input-container">
        <label>
          <span>Full Name</span>
          <input type="text" placeholder="John Doe" />
        </label>
        <label>
          <span>
            Job Title
            <span> optional</span>
          </span>
          <input type="text" placeholder="John Doe" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" placeholder="johndoe123@gmail.com" />
        </label>
        <label>
          <span>
            Phone Number
            <span> Not recommended</span>
          </span>
          <input type="text" placeholder="John Doe" />
        </label>
      </div>
      <label className="summary-label">
        <span>
          Summary <span> not recommended</span>
        </span>
        <textarea></textarea>
      </label>
    </>
  );
};

const Form = () => {
  return (
    <div className="form-container">
      <h3>Personal Details</h3>
      <form className="form">
        <Personal />
      </form>
    </div>
  );
};

export default Form;

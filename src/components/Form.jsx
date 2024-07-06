import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Personal = () => {
  const summaryString = `As a Principal Software Engineer, I excel in designing and developing robust and scalable software solutions ...`;

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
          <input type="text" placeholder="Principal Software Engineer" />
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
          <input type="text" placeholder="944 704 8000" />
        </label>
      </div>
      <label className="summary-label">
        <span>
          Summary <span> not recommended</span>
        </span>
        <textarea placeholder={summaryString}></textarea>
      </label>
    </>
  );
};

const FormTitle = () => {
  return (
    <div className="form-title-div">
      <h3>Personal Details</h3>
      <div className="next-btn-div">
        <button className="prev-btn">
          <FaAngleLeft />
          Back
        </button>
        <button className="next-btn">
          Next
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <div className="form-container">
      <FormTitle />
      <form className="form">
        <Personal />
      </form>
    </div>
  );
};

export default Form;

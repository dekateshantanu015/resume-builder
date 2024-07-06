import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "./Form.css";
import { Skills } from "./FormSections";

const FormTitle = () => {
  return (
    <div className="form-title-div">
      <h3>Personal Details</h3>
      <div className="next-btn-div">
        <button className="preview-btn">
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
        <Skills />
      </form>
    </div>
  );
};

export default Form;

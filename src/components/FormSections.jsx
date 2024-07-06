import React, { useState } from "react";

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

const Skills = () => {
  const [skills, setSkills] = useState(["", "", ""]);

  const addInput = () => {
    setSkills([...skills, ""]);
  };

  const handleInputChange = (e, index) => {
    const skillsCopy = [...skills];
    skillsCopy[index] = e.target.value;
    setSkills(skillsCopy);
  };

  const handleRemove = (index) => {
    const skillsCopy = [...skills];
    skillsCopy.splice(index, 1);
    setSkills(skillsCopy);
  };

  return (
    <>
      <div className="skill-container">
        {skills.map((skill, index) => (
          <div className="skill-div" draggable="true" key={index}>
            <div className="skill-order-div">
              <div>{index + 1}</div>
              <div>di</div>
            </div>
            <input
              type="text"
              value={skill}
              placeholder="Skill"
              onChange={(e) => handleInputChange(e, index)}
            />
            <button type="button" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="skill-add-div">
        <button type="button" className="skill-add-btn" onClick={addInput}>
          Add more
        </button>
      </div>
    </>
  );
};

export { Personal, Skills };

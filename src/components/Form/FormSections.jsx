import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SkillSortable from "./SkillSortable";

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
  const [skills, setSkills] = useState([
    { id: 1, name: "" },
    { id: 2, name: "" },
    { id: 3, name: "" },
  ]);

  const addInput = () => {
    setSkills([...skills, { id: skills.length + 1, name: "" }]);
  };

  const handleInputChange = (e, id) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, name: e.target.value } : skill
      )
    );
  };

  const handleRemove = (index) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id !== over.id) {
      const oldIndex = skills.findIndex((skill) => skill.id === active.id);
      const newIndex = skills.findIndex((skill) => skill.id === over.id);

      setSkills(arrayMove(skills, oldIndex, newIndex));
    }
  };

  return (
    <>
      <div className="skill-container">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={skills}
            strategy={verticalListSortingStrategy}
          >
            {skills.map((skill, index) => (
              <SkillSortable
                skill={skill.name}
                index={index}
                key={skill.id}
                id={skill.id}
                handleInputChange={handleInputChange}
                handleRemove={handleRemove}
              />
            ))}
          </SortableContext>
        </DndContext>
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

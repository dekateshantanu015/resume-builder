import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FaGrip } from "react-icons/fa6";
import PropTypes from "prop-types";

const SkillSortable = ({
  id,
  index,
  skill,
  handleInputChange,
  handleRemove,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="skill-div" ref={setNodeRef} style={style}>
      <div className="skill-order-div">
        <button
          type="button"
          className="grip-btn"
          {...attributes}
          {...listeners}
        >
          <FaGrip />
        </button>
        <div>{index + 1}</div>
      </div>
      <input
        type="text"
        value={skill}
        placeholder="Skill"
        onChange={(e) => handleInputChange(e, id)}
      />
      <button type="button" onClick={() => handleRemove(id)}>
        Remove
      </button>
    </div>
  );
};

SkillSortable.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  skill: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default SkillSortable;

import PropTypes from "prop-types";

const SkillList = ({ src, skill }) => {
  return (
    <span>
      <img src={src} alt="Checkmark Icon" />
      <p>{skill}</p>
    </span>
  );
};

SkillList.propTypes = {
  src: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default SkillList;

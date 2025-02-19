import PropTypes from "prop-types";

const ProjectsCard = ({ src, link, title, description }) => {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${title} logo`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
};

// Add prop validation using PropTypes
ProjectsCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectsCard;

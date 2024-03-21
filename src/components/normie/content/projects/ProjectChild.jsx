import PropTypes from "prop-types";
import styles from "/src/styles/normie.module.scss";

const ProjectChild = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.background}>
        <img src={project.background} />
      </div>
      <div className={styles.project_info}>
        <h2>{project.name}</h2>
        <div className={styles.tools}>
          {project.tools.map((tool) => (
            <img src={tool.img} alt={tool.name} key={tool.name}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectChild;

ProjectChild.propTypes = {
  project: PropTypes.object,
};

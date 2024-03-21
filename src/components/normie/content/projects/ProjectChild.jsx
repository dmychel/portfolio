import PropTypes from "prop-types";
import styles from "/src/styles/normie.module.scss";

const ProjectChild = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.background}>
        <img src={project.background} />
      </div>
    </div>
  );
};

export default ProjectChild;

ProjectChild.propTypes = {
  project: PropTypes.object,
};

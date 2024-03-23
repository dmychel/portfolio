import PropTypes from "prop-types";
import styles from "/src/styles/normie.module.scss";
import { Link } from "react-router-dom";

const ProjectChild = ({ project }) => {
  return (
    <Link
      to="/project"
      state={{ project: project }}
      className={styles.card_container}
    >
      <div className={styles.card}>
        <div className={styles.background}>
          <img src={project.background} />
        </div>
        <div className={styles.project_info}>
          <p>{project.name}</p>
          <div className={styles.tools}>
            {project.tools.map((tool) => (
              <img src={tool.img} alt={tool.name} key={tool.name}></img>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectChild;

ProjectChild.propTypes = {
  project: PropTypes.object,
};

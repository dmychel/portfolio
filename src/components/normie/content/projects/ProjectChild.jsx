import PropTypes from "prop-types";
import styles from "/src/styles/normie.module.scss";

const ProjectChild = ({ project }) => {
  return (
    <>
      <div className={styles.project}>
        <div
          className={styles.projectBackground}
          style={{ backgroundImage: `url(${project.background})` }}
        ></div>
        <p className={styles.title}>{project.name}</p>
        <p className={styles.description}>{project.description}</p>
        <nav className={styles.links}>
          <a href={project.link} target="_blank" rel="noreferrer">
            Link
          </a>
          <a href={project.repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        </nav>
        <div className={styles.tools}>
          {project.tools.map((tool) => (
            <img src={tool.img} alt={tool.name} key={tool.name}></img>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectChild;

ProjectChild.propTypes = {
  project: PropTypes.object,
};

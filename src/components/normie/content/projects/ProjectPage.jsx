import { useLocation } from "react-router-dom";
import styles from "/src/styles/project.module.scss";
import Header from "/src/components/normie/Header";

const ProjectPage = () => {
  const location = useLocation();
  const project = location.state.project;
  return (
    <section className={styles.project_container}>
      <Header />
      <div className={styles.project}>
        <div className={styles.title}>
          <h2>{project.name}</h2>
          <button>
            <a href={project.link} target="_blank" rel="noreferrer">
              Live
            </a>
          </button>
        </div>
        <div className={styles.preview}>
          <img src={project.background} alt="Project Preview" />
        </div>
        <div className={styles.info}>
          <div className={styles.tools}>
            {project.tools.map((tools) => (
              <span key={tools.name}>{tools.name}</span>
            ))}
          </div>
          <p>{project.description}</p>
          <p>
            There is a lot more info regarding the project on the{" "}
            <a href={project.repo} target="_blank" rel="noreferrer">
              Repo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;

import PropTypes from "prop-types";
import "/src/styles/normie/projects.css";

const ProjectChild = ({ project }) => {

  return (
    <>
      <div className="project">
        <p className="project-title">{project.name}</p>
        <p className="description">{project.description}</p>
        <nav className="links">
          <a href={project.link} target="_blank" rel="noreferrer">
            Link
          </a>
          <a href={project.repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        </nav>
        <div className="tools">
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
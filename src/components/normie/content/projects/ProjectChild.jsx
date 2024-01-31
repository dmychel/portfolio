import PropTypes from "prop-types";
import "/src/styles/normie/projects.css";

const ProjectChild = ({ project }) => {
  const MouseOver = (id, id2) => {
    console.log(id2);
    const prevEl = document.getElementById(id);
    const imageEl = document.getElementById(id2);

    prevEl.style.left = 0;
    imageEl.style.opacity = 0.75;
  };

  const mouseExit = (id, id2) => {
    console.log(id2);
    const prevEl = document.getElementById(id);
    const imageEl = document.getElementById(id2);

    prevEl.style.left = "-5000px";
    imageEl.style.opacity = 0;
  };

  return (
    <>
      <div className="preview-img" id="preview">
        <img id={project.name} src={project.image} alt="image" />
      </div>

      <div
        className="project"
        onMouseMove={() =>
          MouseOver(project.name, project.name + " background")
        }
        onMouseLeave={() =>
          mouseExit(project.name, project.name + " background")
        }
      >
        <div className="project-background" id={project.name + " background"}>
          <img src={project.background} alt="" />
        </div>
        <p>{project.name}</p>
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
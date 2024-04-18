import PropTypes from "prop-types";

function ProjectRender({ projects }) {
  return projects.map((object) => (
    <div className="project" key={object.title}>
      <h2>{object.title}</h2>
      <p>{object.desctiption}</p>
      <div className="links">
        <a href={object.live} target="_blank" rel="noreferrer">
          View Now
        </a>
        <a href={object.repo} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </div>
  ));
}

ProjectRender.propTypes = {
  projects: PropTypes.array,
};

export default ProjectRender;

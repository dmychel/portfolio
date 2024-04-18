import PropTypes from "prop-types";

function ProjectRender({ projects }) {
  return projects.map((object) => (
    <div className="project" key={object.title}>
      <div className="left">

        <div className="tools">
          {object.tools.map((tool) => (
            <img src={tool.url} alt={tool.name} key={tool.name} />
          ))}
          <p>{object.live}</p>
        </div>
        <div className="info">
          <p>{object.description}</p>
        </div>

      </div>
      <div className="right">
        <a href={object.live} target="_blank" rel="noreferrer">&#128279;</a>
      </div>
    </div>
  ));
}

ProjectRender.propTypes = {
  projects: PropTypes.array,
};

export default ProjectRender;

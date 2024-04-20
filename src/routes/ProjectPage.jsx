import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectPage({ currentProject }) {
  const object = currentProject;
  console.log(object.tools);

  return (
    <section className="project_page">
      <h3>{object.title}</h3>
      <motion.span
        initial={{
          opacity: 0,
          x: "-200vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 0.25, type: "spring", stiffness: 45 }}
      >
        <Link to="/">Back</Link>
      </motion.span>
      <div className="project_info">
        <p>{object.description}</p>
      </div>
      <div className="project_image">
        <img src={object.image} alt="Preview" />
      </div>
      <div className="skills">
        {object.tools.map((tool, index) => (
          <img src={tool.url} alt={tool.name} key={index} />
        ))}
      </div>
      <div className="project_links">
        <a href={object.live} target="_blank" rel="noreferrer">
          Live
        </a>
        <a href={object.repo} target="_blank" rel="noreferrer">
          Repo
        </a>
      </div>
    </section>
  );
}

ProjectPage.propTypes = {
  currentProject: PropTypes.object,
};

export default ProjectPage;

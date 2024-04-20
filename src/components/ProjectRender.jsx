import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectRender({ projects, setCurrentProject }) {
  return projects.map((object) => (
    <motion.div
      className="project"
      key={object.title}
      whileHover={{ y: 5, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Link to="/project-page" onClick={() => setCurrentProject(object)}>
        <div className="tools">
          <h4>{object.title}</h4>
          {object.tools.map((tool, index) => (
            <motion.img
              src={tool.url}
              alt={tool.name}
              key={index}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ delay: 1.25 }}
            />
          ))}
        </div>
        <div className="info">
          <p>{object.description}</p>
        </div>
      </Link>
    </motion.div>
  ));
}

ProjectRender.propTypes = {
  projects: PropTypes.array,
  setCurrentProject: PropTypes.func,
};

export default ProjectRender;

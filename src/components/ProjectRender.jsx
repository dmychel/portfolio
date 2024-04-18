import PropTypes from "prop-types";
import { motion } from "framer-motion"

function ProjectRender({ projects }) {
  return projects.map((object) => (
    <motion.div className="project" key={object.title}
      initial={{
        opacity: 0,
        y: "200vh"
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{ delay: 1.25, type: "spring", stiffness: 50 }}>
      <div className="left">

        <div className="tools">
          <p>{object.title}</p>
          {object.tools.map((tool, index) => (
            <img src={tool.url} alt={tool.name} key={index} />
          ))}

        </div>
        <div className="info">
          <p>{object.description}</p>
        </div>

      </div>
      <div className="right">
        <a href={object.live} target="_blank" rel="noreferrer">&#128279;</a>
      </div>
    </motion.div>
  ));
}

ProjectRender.propTypes = {
  projects: PropTypes.array,
};

export default ProjectRender;

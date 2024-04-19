import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

function ProjectRender({ projects }) {
  return projects.map((object) => (

    <motion.div className="project" key={object.title} whileHover={{ x: 50, scale: 1.05, }} >
      <Link to={object.page}> <div className="tools">
        <h4>{object.title}</h4>
        {object.tools.map((tool, index) => (
          <img src={tool.url} alt={tool.name} key={index} />
        ))}
      </div>
        <div className="info">
          <p>{object.description}</p>
        </div></Link>

    </motion.div>
  ));
}

ProjectRender.propTypes = {
  projects: PropTypes.array,
};

export default ProjectRender;

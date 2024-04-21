import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectArr } from "../components/projectsData";
import PropTypes from "prop-types";
import ProjectRender from "../components/ProjectRender";

function Projects({ setCurrentProject }) {
  window.scrollTo(0, 0);
  return (
    <motion.section
      className="preview_project"
      initial={{
        opacity: 0,
        y: "200vh",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.45, type: "spring", stiffness: 50 }}
    >
      <motion.h2
        initial={{
          opacity: 0,
          x: "-200vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 1, type: "spring", stiffness: 45 }}
      >
        Projects
      </motion.h2>
      <motion.span
        initial={{
          opacity: 0,
          x: "-200vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 1, type: "spring", stiffness: 45 }}
      >
        <Link to="/">Back</Link>
      </motion.span>
      <ProjectRender
        projects={projectArr}
        setCurrentProject={setCurrentProject}
      />
    </motion.section>
  );
}

Projects.Proptypes = {
  setCurrentProject: PropTypes.func,
};

export default Projects;

import ProjectRender from "./ProjectRender";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectArr } from "./projectsData";
import PropTypes from "prop-types";

function PreviewProject({ setCurrentProject }) {
  let projects = [];
  function parseProjects() {
    for (let i = 0; i < 3; i++) {
      projects.push(projectArr[i]);
    }
  }
  parseProjects();

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
      <h2>Projects</h2>
      <ProjectRender
        projects={projects}
        setCurrentProject={setCurrentProject}
      />
      <p style={{ color: "#BD93F9" }}>
        View more projects <Link to="/projects">here</Link>.
      </p>
    </motion.section>
  );
}

PreviewProject.propTypes = {
  setCurrentProject: PropTypes.func,
};

export default PreviewProject;

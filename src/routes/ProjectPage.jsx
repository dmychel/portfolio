import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectPage({ currentProject }) {
  const object = currentProject;
  console.log(object.tools);

  return (
    <section className="project_page">
      <motion.h3
        initial={{
          opacity: 0,
          x: "-200vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 0.85, type: "spring", stiffness: 45 }}>{object.title}</motion.h3>
      <motion.span
        initial={{
          opacity: 0,
          x: "-200vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 0.55, type: "spring", stiffness: 45 }}
      >
        <Link to="/projects">Back</Link>
      </motion.span>
      <motion.div className="project_info"
        initial={{
          opacity: 0,
          x: "-200vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 0.24, type: "spring", stiffness: 45 }}>
        <p>{object.description}</p>
      </motion.div>
      <motion.div className="project_links"
        initial={{
          opacity: 0,
          x: "-200vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 0.25, type: "spring", stiffness: 45 }}>
        <a href={object.live} target="_blank" rel="noreferrer">
          Live
        </a>
        <a href={object.repo} target="_blank" rel="noreferrer">
          Repo
        </a>
      </motion.div>
      <motion.div className="project_image"
        initial={{
          opacity: 0,
          x: "-200vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 0.25, type: "spring", stiffness: 45 }}>
        <img src={object.image} alt={object.image} />
      </motion.div>
      <motion.div className="skill_tools" style={{ justifyContent: "left", gap: "2em", width: "fit-content", margin: "auto" }}
        initial={{
          opacity: 0,
          x: "-200vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ type: "spring", stiffness: 45 }}>
        {object.tools.map((tool, index) => (
          <motion.img src={tool.url} alt={tool.name} key={index} />
        ))}
      </motion.div>
    </section>
  );
}

ProjectPage.propTypes = {
  currentProject: PropTypes.object,
};

export default ProjectPage;

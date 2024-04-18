import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      className="projects"
      initial={{
        borderRadius: "35px",
        scale: 0.5,
        opacity: 0.25,
        rotateZ: 10,
      }}
      animate={{
        scale: 1,
        height: "95%",
        width: "95%",
        opacity: 1,
        rotateZ: 360,
      }}
      transition={{ type: "spring", stiffness: 35 }}
    >
      <h1>Projects</h1>
      <Link to="/">Go Back</Link>
    </motion.div>
  );
}

export default Projects;

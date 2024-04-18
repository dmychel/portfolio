import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Labs() {
  return (
    <motion.div
      className="projects"
      initial={{
        borderRadius: "35px",
        scale: 0.5,
        opacity: 0.25,
        rotateZ: 18,
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
      <h1>Labs</h1>
      <Link to="/">Go Back</Link>
    </motion.div>
  );
}

export default Labs;

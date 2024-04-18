import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Index() {
  return (
    <div className="grid">
      <motion.div
        className="card"
        initial={{ x: "-200vw", rotateZ: 100 }}
        animate={{ x: 0, rotateZ: 0 }}
        transition={{
          type: "spring",
          stiffness: 35,
        }}
        whileHover={{ scale: 1.1, rotateZ: 10 }}
      >
        <Link to="/projects">Projects</Link>
      </motion.div>
      <motion.div
        className="card"
        initial={{ y: "-200vh", rotateZ: -50 }}
        animate={{ y: 0, rotateZ: 0 }}
        transition={{
          type: "spring",
          stiffness: 35,
        }}
        whileHover={{
          scale: 1.25,
          rotateZ: -15,
        }}
      >
        <Link to="/about">About</Link>
      </motion.div>
      <motion.div
        className="card"
        initial={{ x: "200vw", rotateZ: 150 }}
        animate={{ x: 0, rotateZ: 0 }}
        transition={{
          type: "spring",
          stiffness: 35,
        }}
        whileHover={{
          scale: 1.25,
          rotateZ: 18,
        }}
      >
        <Link to="/labs">Labs</Link>
      </motion.div>
    </div>
  );
}

export default Index;

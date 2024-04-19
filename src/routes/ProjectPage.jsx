import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectPage() {
  return (
    <section className="project_page">
      <h3>Yakuza API</h3>
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
      <div className="project_info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis
          soluta harum quos repellendus incidunt voluptate eos, iusto delectus
          eum commodi asperiores earum a saepe minima quisquam temporibus non
          nulla!
        </p>
      </div>
      <div className="project_image">
        <img src="" alt="Preview" />
      </div>
      <div className="skills"></div>
      <div className="project_links">
        <a href="">Live</a>
        <a href="">Repo</a>
      </div>
    </section>
  );
}

ProjectPage.propTypes = {
  object: PropTypes.object,
};
export default ProjectPage;

// functions
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ProjectPage({ currentProject }) {
  const [loading, setLoading] = useState(true)
  const object = currentProject

  // wait for app to set useState
  useEffect(() => {
    currentProject === null ? setLoading(true) : setLoading(false)
  }, [currentProject])

  return (
    <section className="project_page">
      {
        loading ? <h2>Loading.. :D</h2> :
          <>
            <motion.h3
              initial={{
                opacity: 0,
                x: "-200vw",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ delay: 0.85, type: "spring", stiffness: 45 }}
            >
              {object.title}
            </motion.h3>
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
              <Link to="/projects">.../projects</Link>
            </motion.span>
            <motion.div
              className="project_info"
              initial={{
                opacity: 0,
                x: "-200vw",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ delay: 0.24, type: "spring", stiffness: 45 }}
            >
              <motion.div
                className="project_image"
                initial={{
                  opacity: 0,
                  x: "-200vw",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ delay: 0.25, type: "spring", stiffness: 45 }}
              >
                <img src={object.image} alt="Error Loading Image :(" />
              </motion.div>
              <p>{object.summary}</p>
            </motion.div>
            <motion.div
              className="project_links"
              initial={{
                opacity: 0,
                x: "-200vw",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ delay: 0.25, type: "spring", stiffness: 45 }}
            >
              <a href={object.live} target="_blank" rel="noreferrer">
                Live
              </a>
              <a href={object.repo} target="_blank" rel="noreferrer">
                Repo
              </a>
            </motion.div>

            <motion.div
              className="skill_tools"
              initial={{
                opacity: 0,
                x: "-200vw",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ type: "spring", stiffness: 45 }}
            >
              {object.tools.map((tool, index) => (
                <motion.img src={tool.url} alt={tool.name} key={index} />
              ))}
            </motion.div>
          </>
      }

    </section>
  );
}

ProjectPage.propTypes = {
  currentProject: PropTypes.object,
};

export default ProjectPage;

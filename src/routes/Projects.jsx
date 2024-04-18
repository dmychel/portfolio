import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectRender from "../components/ProjectRender";

function Projects() {
  const projectArr = [
    {
      title: "Yakuza API",
      description:
        "A restful API I created to serve media assets from the Yakzua series",
      live: "https://yakuza-api.netlify.app/",
      repo: "https://github.com/dmychel/yakuza-api",
      image: "/assets/imgs/yakuza-api.png",
    },
  ];
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
      <ProjectRender projects={projectArr} />
    </motion.div>
  );
}

export default Projects;

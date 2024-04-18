import { motion } from "framer-motion";
import ProjectRender from "../components/ProjectRender";

function Projects() {
  const projectArr = [
    {
      title: "Yakuza API",
      description:
        "A restful API I created to serve media assets from the Yakzua series",
      live: "https://yakuza-api.netlify.app/",
      image: "/assets/imgs/yakuza-api.png",
      tools: [{ name: "Javascript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }, {
        name: "node", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"

      }]
    },
    {
      title: "Terminal",
      description:
        "A unique twist on my portfolio to show my passion for Linux and tech. *This project is in the process of being migrated, thank you for your patience.*",
      live: "https://yakuza-api.netlify.app/",
      image: "/assets/imgs/yakuza-api.png",
      tools: [
        {
          name: "reactJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
        },
        {
          name: "Vite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        },
        {
          name: "Sass", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        },
      ]
    },
    {
      title: "Onitsuka",
      description:
        "A mock eCommerce website",
      live: "https://onitsuka-tiger-mock.netlify.app/",
      tools: [
        {
          name: "reactJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
        },
        {
          name: "Vite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        },
        {
          name: "Sass", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        },
      ]
    },
    {
      title: "Message Board",
      description:
        "A basic dynamic node application that displays messages from online users. This was a exciting project to begin my back-end journey. *The app needs to build when launched, please await around 45sec*",
      live: "https://message-board-apba.onrender.com/",
      tools: [
        {
          name: "Node", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        },
        {
          name: "EJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
        },
        {
          name: "Mongoose", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg"
        },
        {
          name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
        },
      ]
    },
    {
      title: "Windfall Matchup",
      description:
        "Traditional Match up game to display my competency React",
      live: "https://message-board-apba.onrender.com/",
      tools: [
        {
          name: "reactJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
        },
        {
          name: "Vite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        },
      ]
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
      <div className="skills">
        <h2>Skills</h2>
        <div className="skill_tools">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" alt="Express" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="Sass" />
        </div>
      </div>
      <div className="projects_wrapper">
        <h2>Projects</h2>
        <ProjectRender projects={projectArr} />
      </div>

    </motion.div>
  );
}

export default Projects;

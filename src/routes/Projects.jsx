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

      }],
      id: 1
    },
    {
      title: "Terminal",
      description:
        "A unique twist on my portfolio to show my passion for Linux and tech. *This project is in the process of being migrated, thank you for your patience.*",
      live: "",
      image: "/assets/imgs/yakuza-api.png",
      tools: [
        {
          name: "reactJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        },
        {
          name: "Vite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
        },
        {
          name: "Sass", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        },
      ],
      id: 2
    },
    {
      title: "Onitsuka",
      description:
        "A mock eCommerce website",
      live: "https://onitsuka-tiger-mock.netlify.app/",
      tools: [
        {
          name: "reactJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        },
        {
          name: "Vite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
        },
        {
          name: "Sass", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        },
      ],
      id: 3
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
          name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
        },
        {
          name: "Mongoose", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg"
        },
      ],
      id: 4
    },
    {
      title: "Windfall Matchup",
      description:
        "Traditional Match up game to display my competency React",
      live: "https://windfall-matchup.netlify.app/",
      tools: [
        {
          name: "reactJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        },
        {
          name: "Vite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
        },
        {
          name: "Vite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        },
      ],
      id: 5
    },
  ];

  return (
    <section className="wrapper">
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
          <motion.h2
            initial={{
              opacity: 0,
              y: "200vh"
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{ delay: 1, type: "spring", stiffness: 50 }}>Skills</motion.h2>
          <motion.div className="skill_tools"
            initial={{
              opacity: 0,
              y: "200vh"
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{ delay: 1, type: "spring", stiffness: 50 }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" alt="Express" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="Sass" />
          </motion.div>
        </div>
        <div className="projects_wrapper">
          <motion.h2
            initial={{
              opacity: 0,
              y: "200vh"
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{ delay: 1.25, type: "spring", stiffness: 50 }}>Projects</motion.h2>
          <ProjectRender projects={projectArr} />
        </div>

      </motion.div>
    </section>
  );
}

export default Projects;

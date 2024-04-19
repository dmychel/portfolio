import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectRender from "../components/ProjectRender";

function Projects() {
  const projectArr = [
    {
      title: "Yakuza API",
      description:
        "A restful API I created to serve media assets from the Yakzua series",
      live: "https://yakuza-api.netlify.app/",
      image: "/assets/imgs/yakuza-api.png",
      tools: [
        {
          name: "Javascript",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
          name: "node",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        },
      ],
      page: "/yakuza-api",
    },
    {
      title: "Terminal",
      description:
        "A unique twist on my portfolio to show my passion for Linux and tech. *This project is in the process of being migrated, thank you for your patience.*",
      live: "",
      image: "/assets/imgs/yakuza-api.png",
      tools: [
        {
          name: "reactJS",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Vite",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        },
        {
          name: "Sass",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        },
      ],
      page: "/terminal",
    },
    {
      title: "Onitsuka",
      description: "A mock eCommerce website",
      live: "https://onitsuka-tiger-mock.netlify.app/",
      tools: [
        {
          name: "reactJS",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Vite",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        },
        {
          name: "Sass",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        },
      ],
      page: "/onitsuka",
    },
    {
      title: "Message Board",
      description:
        "A basic dynamic node application that displays messages from online users. This was a exciting project to begin my back-end journey. *The app needs to build when launched, please await around 45sec*",
      live: "https://message-board-apba.onrender.com/",
      tools: [
        {
          name: "Node",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        },
        {
          name: "MongoDB",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
        },
        {
          name: "Mongoose",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
        },
      ],
      page: "/message-board",
    },
    {
      title: "Windfall Matchup",
      description: "Traditional Match up game to display my competency React",
      live: "https://windfall-matchup.netlify.app/",
      tools: [
        {
          name: "reactJS",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Vite",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        },
        {
          name: "Vite",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        },
      ],
      page: "/windfall-matchup",
    },
  ];

  return (
    <motion.section className="preview_project"
      initial={{
        opacity: 0,
        y: "200vh",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.45, type: "spring", stiffness: 50 }}>
      <motion.h2
        initial={{
          opacity: 0,
          x: "-200vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 1, type: "spring", stiffness: 45 }}>Projects</motion.h2>
      <motion.span initial={{
        opacity: 0,
        x: "-200vw",
      }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 1, type: "spring", stiffness: 45 }}><Link to='/'>Back</Link></motion.span>
      <ProjectRender projects={projectArr} />
    </motion.section>
  );
}

export default Projects;

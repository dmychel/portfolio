import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import ProjectRender from "../components/ProjectRender";

function Projects({ setCurrentProject }) {
  window.scrollTo(0, 0);

  const projectArr = [
    {
      title: "Yakuza API",
      description:
        "A restful API I created to serve media assets from the Yakzua series",
      live: "https://yakuza-api.netlify.app/",
      image: "https://64.media.tumblr.com/46bd487b81e3b49b3b3f523c5efd8683/e7f01d6be5be4ec0-2a/s2048x3072/604e8f9cbfcff03ac091f7d07d5dcc797478240c.pnj",
      repo: "https://github.com/dmychel/yakuza-api",
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
    },
    {
      title: "Terminal",
      description:
        "A unique twist on my portfolio to show my passion for Linux and tech. *This project is in the process of being migrated, thank you for your patience.*",
      live: "",
      image: "https://64.media.tumblr.com/d352971e6dbf1425eb1b694ae0aee2aa/0d06ed392c6e1280-08/s2048x3072/a1d176d5521aa3ea01288d85de5fa0c205b02635.jpg",
      repo: "",
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
    },
    {
      title: "Onitsuka",
      description: "A mock eCommerce website",
      live: "https://onitsuka-tiger-mock.netlify.app/",
      image: "https://64.media.tumblr.com/8dcf7ffed9c4b7d37d38488d91d69d00/355392f59f6cbd85-17/s2048x3072/104f08ed8a7328fba8302215c2f6e76cae4bce25.pnj",
      repo: "https://github.com/dmychel/eCommerce-site",
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
    },
    {
      title: "Message Board",
      description:
        "A basic dynamic node application that displays messages from online users. This was a exciting project to begin my back-end journey. *The app needs to build when launched, please await around 45sec*",
      live: "https://message-board-apba.onrender.com/",
      repo: "https://github.com/dmychel/message-board",
      image: "https://64.media.tumblr.com/7b6705548e1c0259cc11cc6b235be0cb/6e8124104a13ebe5-ed/s2048x3072/6fa4f92cde61c987bfdce6ce75c150fb99a2b6e5.jpg",
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
    },
    {
      title: "Windfall Matchup",
      description: "Traditional Match up game to display my competency React",
      live: "https://windfall-matchup.netlify.app/",
      repo: "https://github.com/dmychel/memory-game",
      image: "https://64.media.tumblr.com/0bf67accc7d6c9bf6ed796504cc175c8/7e5491ce3ae60e98-93/s2048x3072/8dc331781d0d927b3c439ba280e81462b7d6c917.pnj",
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
    },
  ];

  return (
    <motion.section
      className="preview_project"
      initial={{
        opacity: 0,
        y: "200vh",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.45, type: "spring", stiffness: 50 }}
    >
      <motion.h2
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
        Projects
      </motion.h2>
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
      <ProjectRender projects={projectArr} setCurrentProject={setCurrentProject} />
    </motion.section>
  );
}
Projects.Proptypes = {
  setCurrentProject: PropTypes.object
}

export default Projects;

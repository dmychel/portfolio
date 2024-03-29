import styles from "/src/styles/normie.module.scss";
import ProjectChild from "./ProjectChild";

const Projects = () => {
  const projectArr = [
    {
      name: "Onistuka Mock Website",
      background: "/assets/imgs/onitsuka-preview.png",
      link: "https://onitsuka-tiger-mock.netlify.app/",
      repo: "https://github.com/dmychel/eCommerce-site",
      description:
        "A mock eCommerce website to flex my UI design skills I've been working to improve.",
      tools: [
        {
          name: "Javascript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        { name: "Vite", img: "https://v2.vitejs.dev/logo.svg" },
        {
          name: "SASS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        },
      ],
    },
    {
      name: "Terminal",
      background: "/assets/imgs/terminal-preview.jpg",
      repo: "https://github.com/dmychel/portfolio",
      description:
        "A unique twist on my portfolio to show my passion for Linux and tech. *This project is in the process of being migrated, thank you for your patience.*",
      tools: [
        {
          name: "Javascript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        { name: "Vite", img: "https://v2.vitejs.dev/logo.svg" },
        {
          name: "SASS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        },
      ],
    },
    {
      name: "Node Message Board",
      background: "/assets/imgs/message-background.jpg",
      link: "https://message-board-apba.onrender.com/",
      repo: "https://github.com/dmychel/message-board",
      description:
        "A basic dynamic node application that displays messages from online users. This was a exciting project to begin my back-end journey.",
      tools: [
        {
          name: "Javascript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        { name: "EJS", img: "/assets/icons/ejs.png" },
        {
          name: "Node.js",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "MongoDB",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
      ],
    },
    {
      name: "Windfall Matchup",
      background: "/assets/imgs/memory-preview.png",
      link: "https://windfall-matchup.netlify.app/",
      repo: "https://github.com/dmychel/memory-game",
      tools: [
        {
          name: "Javascript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        { name: "Vite", img: "https://v2.vitejs.dev/logo.svg" },
      ],
    },
    {
      name: "Game Archive",
      background: "/assets/imgs/game-archive-background.png",
      link: "https://dmychel.github.io/game-archive/",
      repo: "https://github.com/dmychel/game-archive",
      description:
        "This web application serves as a simple game archive for games you have played, and displays them in an ordely clean fashion! Built with Vanilla JS!",
      tools: [
        {
          name: "Javascript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Webpack",
          img: "https://raw.githubusercontent.com/webpack/media/90b54d02fa1cfc8aa864a8322202f74ac000f5d2/logo/icon.svg",
        },
      ],
    },

    {
      name: "CV Maker",
      background: "/assets/imgs/cv-background.png",
      link: "https://cv-maker-webapp.netlify.app/",
      repo: "https://github.com/dmychel/cv-maker",
      description: "A fully editable resume buidler built with React and Vite.",
      tools: [
        {
          name: "Javascript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        { name: "Vite", img: "https://v2.vitejs.dev/logo.svg" },
      ],
    },
  ];
  return (
    <section className={styles.project_container}>
      <h2>Web Developer Portfolio</h2>
      <div className={styles.projects}>
        {projectArr.map((obj, index) => (
          <ProjectChild project={obj} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

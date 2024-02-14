import styles from "/src/styles/normie/projects.module.scss";
import ProjectChild from "./ProjectChild";

const Projects = () => {
  const projectArr = [
    {
      name: "Windfall Matchup",
      background: "/assets/imgs/memory-preview.png",
      link: "https://windfall-matchup.netlify.app/",
      repo: "https://github.com/dmychel/memory-game",
      description:
        "The traditional matching game we all played in elementary school, but with a Legend of Zelda Wind Waker coat of paint.",
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
          name: "HTML",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
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
        {
          name: "HTML",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
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
        {
          name: "HTML",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
    },
    {
      name: "Serena Shopping",
      background: "/assets/imgs/serena-preview.png",
      link: "https://serena-shop.netlify.app/",
      repo: "https://github.com/dmychel/shopping-cart",
      description:
        "A simple web app that mocks the checkout process of an ecommerce website.",
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
          name: "HTML",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
    },
  ];

  return (
    <section className={styles.projectMaster}>
      <div className="title">
        <h2>Work</h2>
      </div>
      <div className={styles.projectWrapper}>
        {projectArr.map((obj, index) => (
          <ProjectChild project={obj} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

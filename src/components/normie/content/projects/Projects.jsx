import "/src/styles/normie/projects.css";
import ProjectChild from "./ProjectChild";

const Projects = () => {
  const projectArr = [
    {
      name: "Windfall Matchup",
      image: "/assets/imgs/memory-preview.png",
      background: "/assets/imgs/memory-background.jpeg",
      link: "https://relaxed-medovik-632ef4.netlify.app/",
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
      name: "Terminal",
      image: "/assets/imgs/terminal-background.jpg",
      background: "/assets/imgs/terminal-background.jpg",
      link: "https://dmychel.github.io/terminal-portfolio/",
      repo: "https://github.com/dmychel/terminal-portfolio",
      description:
        "A fun take on a personal development portfolio. This project isn't necessarily built to display my technical skill, but rather to show my passion for web development and GNU Linux.",
      tools: [
        {
          name: "Javascript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
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
      name: "Game Archive",
      image: "/assets/imgs/game-archive-background.png",
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
      image: "/assets/imgs/cv-background.png",
      background: "/assets/imgs/cv-background.png",
      link: "https://creative-gumption-e93819.netlify.app/",
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
  ];

  return (
    <section className="project-master">
      <div className="title">
        <h2>Work</h2>
      </div>
      {projectArr.map((obj, index) => (
        <section className="project-container" key={index}>
          <ProjectChild project={obj} />
        </section>
      ))}
    </section>
  );
};

export default Projects;
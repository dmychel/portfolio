import ProjectRender from "./ProjectRender";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PreviewProject({ setCurrentProject }) {
  const projects = [
    {
      title: "Yakuza API",
      description:
        "A restful API I created to serve media assets from the Yakzua series",
      live: "https://yakuza-api.netlify.app/",
      image: "https://64.media.tumblr.com/46bd487b81e3b49b3b3f523c5efd8683/e7f01d6be5be4ec0-2a/s2048x3072/604e8f9cbfcff03ac091f7d07d5dcc797478240c.pnj",
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
      image: "https://64.media.tumblr.com/d352971e6dbf1425eb1b694ae0aee2aa/0d06ed392c6e1280-08/s2048x3072/a1d176d5521aa3ea01288d85de5fa0c205b02635.jpg",
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
      <h2>Projects</h2>
      <ProjectRender
        projects={projects}
        setCurrentProject={setCurrentProject}
      />
      <p style={{ color: "#50FA7B" }}>
        View more projects <Link to="/projects">here</Link>.
      </p>
    </motion.section>
  );
}

PreviewProject.propTypes = {
  setCurrentProject: PropTypes.func,
};

export default PreviewProject;

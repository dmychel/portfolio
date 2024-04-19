import ProjectRender from "./ProjectRender"
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"


function PreviewProject() {
    const projects = [
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
    ]
    return (
        <motion.section className="preview_project" initial={{
            opacity: 0,
            y: "200vh",
        }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{ delay: 0.45, type: "spring", stiffness: 50 }}>
            <h2>Projects</h2>
            <ProjectRender projects={projects} />
            <p style={{ color: "#50FA7B" }}>View more projects <Link to='/projects'>here</Link>.</p>

        </motion.section>
    )
}

export default PreviewProject
import ProjectRender from "./ProjectRender"
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
        },
    ]
    return (
        <section className="preview_project">
            <h3>Projects</h3>
            <ProjectRender projects={projects} />
            <Link to='/projects'>See more</Link>
        </section>
    )
}

export default PreviewProject
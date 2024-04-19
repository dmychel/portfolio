import { motion } from "framer-motion"

function Skills() {

    return (
        <motion.section className="skills"
            initial={{
                opacity: 0,
                y: "200vh",
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{ delay: 0.25, type: "spring", stiffness: 50 }} >

            <h2>Technologies I Like</h2>
            <div className="skill_tools">
                <motion.img
                    whileHover={{ y: -8, scale: 1.1, rotateZ: 5 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="Javascript"
                />

                <motion.img whileHover={{ y: -8, scale: 1.1, rotateZ: -6 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    alt="React"
                />

                <motion.img whileHover={{ y: -8, scale: 1.1, rotateZ: 4 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="Node"
                />

                <motion.img whileHover={{ y: -8, scale: 1.1, rotateZ: -7 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
                    alt="Express"
                />

                <motion.img whileHover={{ y: -8, scale: 1.1, rotateZ: 10 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="MongoDB"
                />

                <motion.img whileHover={{ y: -8, scale: 1.1, rotateZ: -5 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                    alt="Sass"
                />

                <motion.img whileHover={{ y: -8, scale: 1.1, rotateZ: 6 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                    alt="Linux"
                />

                <motion.img whileHover={{ y: -8, scale: 1.1, rotateZ: -5 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                    alt="Figma"
                />
            </div>
        </ motion.section>
    )
}

export default Skills
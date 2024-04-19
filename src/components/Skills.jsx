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
                    initial={{
                        y: 20,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: 1.25 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="Javascript"
                />

                <motion.img initial={{
                    y: 20,
                    opacity: 0
                }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: 1.35 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    alt="React"
                />

                <motion.img initial={{
                    y: 20,
                    opacity: 0
                }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: 1.45 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="Node"
                />

                <motion.img initial={{
                    y: 20,
                    opacity: 0
                }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: 1.55 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
                    alt="Express"
                />

                <motion.img initial={{
                    y: 20,
                    opacity: 0
                }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: 1.65 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="MongoDB"
                />

                <motion.img initial={{
                    y: 20,
                    opacity: 0
                }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: 1.75 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                    alt="Sass"
                />

                <motion.img initial={{
                    y: 20,
                    opacity: 0
                }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: 1.85 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                    alt="Linux"
                />

                <motion.img initial={{
                    y: 20,
                    opacity: 0
                }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: 1.95 }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                    alt="Figma"
                />
            </div>
        </ motion.section>
    )
}

export default Skills
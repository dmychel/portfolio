import { motion } from 'framer-motion'

function Contact() {
    return (
        <motion.section className="contact"
            initial={{
                opacity: 0,
                y: "200vh",
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{ delay: 0.15, type: "spring", stiffness: 50 }}>
            <h2>Contact</h2>
            <nav>
                <motion.a whileHover={{ y: -8, scale: 1.1, rotateZ: 15 }} href="https://github.com/dmychel" target="_blank" rel="noreferrer"><span className="devicon-github-original"></span></motion.a>
                <motion.a whileHover={{ y: -8, scale: 1.1, rotateZ: -15 }} href="https://www.linkedin.com/in/dylon-crowley-perez-248b0823b/" target="_blank" rel="noreferrer"><span className="devicon-linkedin-plain"></span></motion.a>
                <motion.a whileHover={{ y: -8, scale: 1.1, rotateZ: 25 }} href="mailto:dyloncrowley86@gmail.com" target="_blank" rel="noreferrer"><span className="material-symbols-outlined">
                    mark_email_unread
                </span></motion.a>
            </nav>
        </motion.section>
    )
}

export default Contact
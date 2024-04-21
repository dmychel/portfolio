import { motion } from "framer-motion";

function Intro() {
  return (
    <motion.section
      className="intro"
      initial={{
        opacity: 0,
        y: "200vh",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.65, type: "spring", stiffness: 50 }}
    >
      <h2>Web Developer</h2>
      <p>
        Hey I&apos;m Dylon. I am a very ambitious person who is determined to
        make &apos;delusional&apos; goals become reality. I strongly believe
        that you can achieve anything with enough hard work.
      </p>
      {/* <p style={{ color: "#50FA7B" }}>
        You can learn more about me <Link to="/about">here</Link>.
      </p> */}
    </motion.section>
  );
}
export default Intro;

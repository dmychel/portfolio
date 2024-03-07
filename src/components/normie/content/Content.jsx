import About from "/src/components/normie/content/About";
import Projects from "/src/components/normie/content/projects/Projects";
import Contact from "/src/components/normie/content/Contact";
import Modal from "../../Modal";

import styles from "/src/styles/normie/content.module.scss";

const Content = () => {
  return (
    <section className={styles.contentMaster}>
      <Modal/>
      <About />
      <Projects />
      <Contact />
    </section>
  );
};

export default Content;

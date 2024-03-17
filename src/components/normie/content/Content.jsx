import About from "/src/components/normie/content/About";
import Projects from "/src/components/normie/content/projects/Projects";
import Contact from "/src/components/normie/content/Contact";

import styles from "/src/styles/normie.module.scss";

const Content = () => {
  return (
    <div className={styles.contentMaster}>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Content;

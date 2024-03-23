import styles from "/src/styles/normie.module.scss";
import Header from "./components/normie/Header";
import Projects from "./components/normie/content/projects/Projects";
import Contact from "./components/normie/content/Contact";

const NormieView = () => {
  return (
    <div className={styles.normie_app}>
      <Header />
      <Projects />
      <Contact />
    </div>
  );
};

export default NormieView;

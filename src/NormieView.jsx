import styles from "/src/styles/normie.module.scss";
import Header from "./components/normie/Header";
import Projects from "./components/normie/content/projects/Projects";
import Contact from "./components/normie/content/Contact";
import Loading from './components/Loading';
import { useEffect, useState } from "react";

const NormieView = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  return (
    <>
      {
        loading ? <Loading /> :
          <div className={styles.normie_app}>
            <Header />
            <Projects />
            <Contact />
          </div>
      }
    </>

  );
};

export default NormieView;

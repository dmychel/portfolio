import styles from "/src/styles/normie.module.scss";
import Header from "./components/normie/Header";
import Content from "./components/normie/content/Content";

const NormieView = () => {
  return (
    <div className={styles.normieApp}>
      <Header />
      <Content />
    </div>
  );
};

export default NormieView;

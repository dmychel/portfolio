import styles from "/src/styles/normie.module.scss";

const About = () => {
  return (
    <section className={styles.aboutMaster}>
      <div className={styles.about}>
        <div className={styles.leftAbout}>
          <h1>Whats up! My name is Dylon</h1>
          <p>
            A self taught developer with a burning passion to learn and create.
          </p>
        </div>
        <div className={styles.rightAbout}>
          <img src="/assets/imgs/hero.JPG" alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default About;

import styles from "/src/styles/about.module.scss";
import Header from "/src/components/normie/Header";

const About = () => {
  return (
    <section className={styles.about_container}>
      <Header />
      <div className={styles.about}>
        <div className={styles.slider}>
          <div className={styles.images}>
            <img
              src="/assets/imgs/slider/hero.JPG"
              alt="hero"
              className={styles.active}
            />
            <img src="/assets/imgs/slider/break.jpg" alt="hero" />
            <img src="/assets/imgs/slider/coffee.jpg" alt="hero" />
          </div>
          <div className={styles.nav}>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>
        <div className={styles.info}>
          <h3>Hello!</h3>
          <h2>My name is Dylon</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            quibusdam eos unde ex sint asperiores quod soluta culpa tempora
            atque dolorem nulla! Iure modi exercitationem labore. Reiciendis
            ratione consequuntur eveniet!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

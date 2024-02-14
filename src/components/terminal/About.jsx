import styles from "/src/styles/terminal/about.module.scss";

const About = () => {
  return (
    <section className={styles.About}>
      <div className={styles.intro}>
        Hello stranger... My name is <span>Dylon</span>, I am a{" "}
        <span>self taught developer</span> with a strong passion to learn and
        create. Hopefully I&apos;ve peaked your interest.
        <br></br>
        <span style={{ color: "yellow" }}>
          Tip: Try typing &apos;<span style={{ color: "cyan" }}>cd github</span>
          &apos;
        </span>
      </div>
      <div className={styles.contact}>
        <div>
          <span>
            <img src="/assets/icons/mail.png" alt="mail" />
            <p>Email</p>
          </span>
          <p>dyloncrowley86@gmail.com</p>
        </div>
        <div>
          <span>
            <img src="/assets/icons/github.png" alt="github" />
            <p>Github</p>
          </span>
          <p>https://github.com/dmychel</p>
        </div>
        <div>
          <span>
            <img src="/assets/icons/linkedin.png" alt="linkedin" />
            <p>LinkedIN</p>
          </span>
          <p>https://www.linkedin.com/in/dylon-crowley-perez-248b0823b/</p>
        </div>
      </div>
    </section>
  );
};

export default About;

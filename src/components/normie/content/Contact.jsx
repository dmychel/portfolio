import styles from "/src/styles/normie/contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contactMaster}>
      <div className={styles.title}>
        <h2>Contact</h2>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactText}>
          <p>
            Here are some of the ways you can reach out. I am most likely to see
            and respond to any messages sent to my email,
            <br />
            <span>Hey@DylonCrowley.tech</span>
          </p>
        </div>
        <div className={styles.contactIMG}>
          <a href="mailto:dyloncrowley86@gmail.com">
            <img
              src="/assets/icons/mail.png"
              alt="Email"
              target="_blank"
              rel="noreferrer"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/dylon-crowley-perez-248b0823b/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/icons/linkedin.png" alt="LinkedIN" />
          </a>
          <a href="https://github.com/dmychel" target="_blank" rel="noreferrer">
            <img src="/assets/icons/github.png" alt="Github" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

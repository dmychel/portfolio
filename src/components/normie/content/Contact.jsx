import styles from "/src/styles/normie.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact_container}>
      <h2>Say Hello</h2>

      <div className={styles.contact_info}>
        <p>
          If you&apos;re looking to get in touch there are a few ways you can
          contact me:
          <br />
          <br />
          Email me at <a href="mailto:dyloncrowley86@gmail.com" target="_blank"
            rel="noreferrer">Hey@DylonCrowley.tech</a>
          <br />
          Message me on <a href="https://www.linkedin.com/in/dylon-crowley-perez-248b0823b/" target="_blank"
            rel="noreferrer">LinkedIn</a>
        </p>
      </div>

      <div className={styles.contact_imgs}>
        <a href="https://github.com/dmychel" target="_blank" rel="noreferrer">
          <img src="/assets/icons/github.png" alt="github" />
        </a>
        <a
          href="mailto:dyloncrowley86@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/icons/mail.png" alt="email" />
        </a>
        <a
          href="https://www.linkedin.com/in/dylon-crowley-perez-248b0823b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/icons/linkedin.png" alt="linkedin" />
        </a>
      </div>
    </section>
  );
};

export default Contact;

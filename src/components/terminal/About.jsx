import "/src/styles/terminal/about.css";

const About = () => {
  return (
    <section className="about">
      <div className="intro">
        Hello stranger... My name is <span>Dylon</span>, I am a{" "}
        <span>self taught developer</span> with a strong passion to learn and
        create. Hopefully I&apos;ve peaked your interest.
      </div>
      <div className="contact">
        <div>
          <span>
            <img src="/assets/icons/mail.png" alt="mail" />
            <p>Email</p>
          </span>
          <p>Email Link</p>
        </div>
        <div>
          <span>
            <img src="/assets/icons/github.png" alt="github" />
            <p>Github</p>
          </span>
          <p>Github Link</p>
        </div>
        <div>
          <span>
            <img src="/assets/icons/linkedin.png" alt="linkedin" />
            <p>LinkedIN</p>
          </span>
          <p>LinkedINLink</p>
        </div>
      </div>
    </section>
  );
};

export default About;

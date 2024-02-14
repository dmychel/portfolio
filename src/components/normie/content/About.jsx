import "/src/styles/normie/about.scss";

const About = () => {
  return (
    <section className="about-master">
      <div className="about">
        <div className="left-about">
          <h1>Whats up! My name is Dylon</h1>
          <p>
            A self taught developer with a burning passion to learn and create.
          </p>
        </div>
        <div className="right-about">
          <img src="/assets/imgs/hero.JPG" alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default About;
